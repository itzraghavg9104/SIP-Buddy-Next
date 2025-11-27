import { db, auth } from './firebase';
import { collection, addDoc, getDocs, deleteDoc, query, where, serverTimestamp, doc, setDoc } from 'firebase/firestore';
import { InvestmentPlan, UserProfile, SavedPlan } from '../types';
import { User } from 'firebase/auth';

const plansCollection = collection(db, 'plans');
const usersCollection = collection(db, 'users');

// Helper to remove undefined values which Firestore does not support
const sanitizeForFirestore = <T>(obj: T): T => {
    return JSON.parse(JSON.stringify(obj));
};

// Save a new investment plan to Firestore
export const savePlan = async (
    userId: string,
    planName: string,
    investmentPlan: InvestmentPlan,
    userProfile: UserProfile
): Promise<string> => {
    try {
        const docRef = await addDoc(plansCollection, {
            userId,
            planName,
            investmentPlan: sanitizeForFirestore(investmentPlan),
            userProfile: sanitizeForFirestore(userProfile),
            createdAt: serverTimestamp()
        });
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw new Error("Could not save the plan.");
    }
};

// Get all saved plans for the current user
export const getUserPlans = async (): Promise<SavedPlan[]> => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
        // Return empty array for non-logged-in users instead of throwing error
        return [];
    }

    try {
        const q = query(plansCollection, where("userId", "==", currentUser.uid));
        const querySnapshot = await getDocs(q);
        const plans: SavedPlan[] = [];
        querySnapshot.forEach((doc) => {
            plans.push({ id: doc.id, ...doc.data() } as SavedPlan);
        });
        // Sort by creation date, newest first
        plans.sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0));
        return plans;
    } catch (error) {
        console.error("Error getting documents: ", error);
        throw new Error("Could not fetch saved plans.");
    }
};

// Delete a specific plan
export const deletePlan = async (planId: string): Promise<void> => {
    try {
        const planDoc = doc(db, 'plans', planId);
        await deleteDoc(planDoc);
    } catch (error) {
        console.error("Error deleting document: ", error);
        throw new Error("Could not delete the plan.");
    }
};

// --- USER PROFILE FUNCTIONS ---

/**
 * Creates a new user profile document in Firestore.
 * This should be called once when a user signs up.
 * @param user The User object from Firebase Authentication.
 * @param provider The authentication provider ('email' or 'google')
 */
export const createUserProfileDocument = async (user: User, provider: 'email' | 'google' = 'email'): Promise<void> => {
    const userDocRef = doc(db, 'users', user.uid);
    try {
        await setDoc(userDocRef, {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            authProvider: provider,
            emailVerified: user.emailVerified || provider === 'google', // Google users are auto-verified
            createdAt: serverTimestamp(),
        });
    } catch (error) {
        console.error("Error creating user profile document:", error);
        // We don't throw an error here to not break the sign-up flow,
        // but we log it for debugging.
    }
};

/**
 * Updates an existing user's profile document in Firestore.
 * @param uid The user's unique ID.
 * @param data An object containing the fields to update (e.g., { displayName, photoURL }).
 */
export const updateUserProfileDocument = async (uid: string, data: { displayName?: string, photoURL?: string, cloudinaryPublicId?: string | null }): Promise<void> => {
    const userDocRef = doc(db, 'users', uid);
    try {
        // Use setDoc with merge: true to create the document if it doesn't exist, or update it if it does.
        // This makes the update operation more robust against missing user documents.
        await setDoc(userDocRef, data, { merge: true });
    } catch (error) {
        console.error("Error updating user profile document:", error);
        throw new Error("Could not update user profile in the database.");
    }
};

/**
 * Deletes a user's profile document from Firestore.
 * This should be called when a user deletes their account.
 * @param uid The user's unique ID.
 */
export const deleteUserDocument = async (uid: string): Promise<void> => {
    const userDocRef = doc(db, 'users', uid);
    try {
        await deleteDoc(userDocRef);
    } catch (error) {
        console.error("Error deleting user profile document:", error);
        // We don't throw, as the auth deletion is more critical.
    }
};

/**
 * Updates the email verification status in Firestore.
 * @param uid The user's unique ID.
 * @param verified Whether the email is verified.
 */
export const updateEmailVerificationStatus = async (uid: string, verified: boolean): Promise<void> => {
    const userDocRef = doc(db, 'users', uid);
    try {
        await setDoc(userDocRef, { emailVerified: verified }, { merge: true });
    } catch (error) {
        console.error("Error updating email verification status:", error);
    }
};

/**
 * Records when a verification email was sent.
 * @param uid The user's unique ID.
 */
export const recordVerificationEmailSent = async (uid: string): Promise<void> => {
    const userDocRef = doc(db, 'users', uid);
    try {
        await setDoc(userDocRef, { lastEmailVerificationSent: serverTimestamp() }, { merge: true });
    } catch (error) {
        console.error("Error recording verification email send:", error);
    }
};
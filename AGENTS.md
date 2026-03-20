# AGENTS.md

This file is a working guide for AI coding agents contributing to SIP Buddy. Keep it aligned with the codebase, not with older project docs.

## Project Snapshot

- Product: SIP Buddy, an AI-assisted investment planning app for Indian retail investors.
- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, Firebase Auth, Firestore, Cloudinary, Groq, Google GenAI.
- Rendering model: mostly client components. The `app/` routes are thin wrappers around feature components in `components/`.
- State model: `context/GlobalContext.tsx` is the main app-state hub for auth state, generated plan state, login modals, email-verification flags, and background plan generation progress.

## Commands

- Install deps: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Start build: `npm run start`
- Lint: `npm run lint`

Current verification note:

- In this workspace, `npm run build` could not run yet because dependencies are not installed and `next` is missing from `PATH`.
- There is no test suite configured in `package.json`.

## Repo Layout

- `app/`: route entries, route-specific metadata/layouts, and API routes.
- `components/`: main feature UIs. This is where most product work happens.
- `components/tools/`: tool-specific features like advisor search, quiz, and income tax.
- `context/GlobalContext.tsx`: global client state and cross-route plan/auth flow.
- `actions/groqActions.ts`: server actions for investment-plan generation, chatbot replies, and quiz generation.
- `actions/geminiActions.ts`: server actions for advisor search and audio transcription.
- `services/firestoreService.ts`: plan persistence and user-profile Firestore helpers.
- `services/pdfExportService.ts`: dashboard-to-PDF export.
- `services/ttsService.ts`: browser speech synthesis for chatbot playback.
- `types.ts`: shared app types for plans, profiles, quiz data, and grounding sources.

## Route Map

- `/`: `components/HomeContent.tsx`
- `/planner`: `components/PlannerContent.tsx`
- `/dashboard`: `components/DashboardContent.tsx`
- `/my-plans`: `components/MyPlansContent.tsx`
- `/learn`: `components/LearnContent.tsx`
- `/calculator`: `components/CalculatorContent.tsx`
- `/calculator/sip`: `components/SIPCalculator.tsx`
- `/calculator/lumpsum`: `components/LumpsumCalculator.tsx`
- `/calculator/swp`: `components/SWPCalculator.tsx`
- `/calculator/income-tax`: `components/tools/IncomeTaxCalculator.tsx`
- `/more`: `components/MoreContent.tsx`
- `/more/find-advisor`: `components/tools/FindAdvisor.tsx`
- `/more/finiq-challenge`: `components/tools/FinIQChallenge.tsx`
- `/auth`: `components/AuthContent.tsx`
- `/profile`: `components/ProfileContent.tsx`
- `/about`: `components/AboutContent.tsx`

Most `app/*/page.tsx` files simply render one component. Prefer editing the component, not the wrapper page, unless routing or metadata is the real target.

## Core Flows

### Plan generation

- Planner form lives in `components/PlannerContent.tsx`.
- The actual AI call path is `startPlanGeneration()` in `context/GlobalContext.tsx`, which calls `generateInvestmentPlan()` from `actions/groqActions.ts`.
- Generated plans are stored in `currentPlan` inside context, not in the URL.
- If a plan finishes while the user is off the planner page, `PlanReadyNotification` is shown instead of immediate navigation.

### Save/view plan flow

- Saved plans are written to Firestore through `savePlan()` in `services/firestoreService.ts`.
- `components/MyPlansContent.tsx` fetches the current user's plans and uses `handleViewPlan()` to hydrate `currentPlan`.
- `components/DashboardContent.tsx` expects data from `currentPlan`; if absent, it checks whether saved plans exist and shows fallback CTAs.

### Auth/profile flow

- Auth UI is in `components/AuthContent.tsx`.
- Firebase Auth supports email/password and Google popup sign-in.
- New users get a Firestore profile document via `createUserProfileDocument()`.
- Profile editing, password changes, and Cloudinary-backed profile-picture uploads live in `components/ProfileContent.tsx`.
- Protected-route behavior is client-side only through `GlobalContext`; there is no middleware-based auth gate.

### Chat and voice flow

- Chat UI is `components/Chatbot.tsx`, mounted globally in `components/ClientLayout.tsx`.
- Chat text responses come from `sendMessageToChat()` in `actions/groqActions.ts`.
- Voice input is recorded in the browser and transcribed by `transcribeAudio()` in `actions/geminiActions.ts`.
- Text-to-speech is browser-native via `services/ttsService.ts`.
- `services/audioUtils.ts` exists but is currently unused.

### Tools and calculators

- Calculator landing page and tool landing page both support old query-param URLs and redirect to the new route structure.
- Calculator compatibility redirects:
  - `/calculator?active=sip` -> `/calculator/sip`
  - `/calculator?active=lumpsum` -> `/calculator/lumpsum`
  - `/calculator?active=swp` -> `/calculator/swp`
  - `/calculator?active=tax` -> `/calculator/income-tax`
- Tools compatibility redirects:
  - `/more?tool=find-advisor` -> `/more/find-advisor`
  - `/more?tool=finiq-challenge` -> `/more/finiq-challenge`

## AI / Model Ownership

The older docs are stale here. The live code does this:

- `actions/groqActions.ts`
  - Primary path for investment plan generation
  - Primary path for chatbot replies
  - Primary path for quiz generation
  - Uses model fallback chains across Groq-hosted models
  - Uses Gemini as a search-grounded fallback for plan generation
- `actions/geminiActions.ts`
  - Financial advisor search with `googleMaps`
  - Audio transcription

If you change plan schema or prompt requirements, update all of:

- `types.ts`
- `sanitizeInvestmentPlan()` in `actions/groqActions.ts`
- any UI that reads `investmentPlan`
- Firestore persistence consumers
- PDF export if dashboard structure changes

## Integrations And Config

### Required environment variables

- `GROQ_API_KEY`
- `GEMINI_API_KEY`
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

### Firebase

- Firebase app config is committed in `firebaseConfig.ts`.
- Firestore rules are defined in `firestore.rules`.
- `services/firebase.ts` initializes Auth, Storage, and Firestore.

### Important security note

- `next.config.mjs` currently injects `GEMINI_API_KEY` and `GROQ_API_KEY` via `env`.
- Treat this as a hardening concern. Do not add more secrets there, and be careful when touching config around server-only credentials.

## Important Maintenance Gotchas

- `README.md`, `PROJECT_ANALYSIS.md`, and `MIGRATION_LOG.md` are partially stale. Trust the code first.
- `components/DashboardContent.tsx` and `services/pdfExportService.ts` are tightly coupled.
- PDF export depends on:
  - elements with class `pdf-export-section`
  - a section heading exactly matching `Fund Recommendations`
- If you rename dashboard section titles or remove those class names, PDF export will break.
- `components/PlanReadyNotification.tsx` depends on `showPlanNotification` from context.
- `components/EmailVerificationBanner.tsx` appears in both dashboard and profile; email-verification state comes from `GlobalContext`.
- `components/tools/IncomeTaxCalculator.tsx` is explicitly for FY 2024-25 / AY 2025-26. Update copy and tax logic together when rolling tax years.
- `components/tools/FindAdvisor.tsx` uses browser geolocation first, then falls back to manual search.
- `app/api/upload-profile-picture/route.ts` and `app/api/delete-profile-picture/route.ts` do not verify Firebase ID tokens server-side. This is a real hardening gap.
- Duplicate config files exist:
  - `tailwind.config.ts` and `tailwind.config.js`
  - `postcss.config.js` and `postcss.config.cjs`
  Keep them in sync if you must touch them, or remove duplicates carefully in a dedicated cleanup.

## Editing Guidance

- Prefer changing feature components in `components/` over route wrappers in `app/`.
- If you change routes, also check:
  - `Header.tsx`
  - home-page CTA/card links
  - `app/sitemap.ts`
  - route metadata layouts
  - backward-compat redirect logic in `CalculatorContent.tsx` and `MoreContent.tsx`
- If you change the plan structure, also check:
  - dashboard summaries
  - fund comparison modal
  - saved-plan serialization
  - PDF export
  - source-link rendering in dashboard
- If you change auth or profile behavior, verify:
  - Firebase Auth updates
  - Firestore user document sync
  - Cloudinary upload/delete flow
  - email-verification banner behavior
- If you change AI prompts or fallback models, update this file so future agents do not rely on stale assumptions.

## Recommended First Read For Future Work

If you are new to this repo, read these files first:

1. `package.json`
2. `context/GlobalContext.tsx`
3. `actions/groqActions.ts`
4. `actions/geminiActions.ts`
5. `components/PlannerContent.tsx`
6. `components/DashboardContent.tsx`
7. `services/firestoreService.ts`
8. `services/pdfExportService.ts`

## Keep This File Honest

When architecture, routes, models, security posture, or verification commands change, update this file in the same task.

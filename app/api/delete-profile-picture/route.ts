import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { publicId } = body;

        if (!publicId) {
            return NextResponse.json(
                { error: 'Public ID is required' },
                { status: 400 }
            );
        }

        // Verify this is a Cloudinary URL (not Google or other external URLs)
        if (!publicId.includes('profile-pictures/')) {
            return NextResponse.json(
                { error: 'Invalid public ID. Only Cloudinary profile pictures can be deleted.' },
                { status: 400 }
            );
        }

        // Delete from Cloudinary
        const result = await cloudinary.uploader.destroy(publicId);

        if (result.result === 'ok' || result.result === 'not found') {
            return NextResponse.json({
                success: true,
                message: 'Image deleted successfully',
            });
        } else {
            throw new Error('Failed to delete image');
        }

    } catch (error: any) {
        console.error('Error deleting from Cloudinary:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to delete image' },
            { status: 500 }
        );
    }
}

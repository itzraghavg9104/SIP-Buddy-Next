import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback: React.ReactNode;
}

const SafeImage: React.FC<SafeImageProps> = ({ src, fallback, ...props }) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) {
      setError(true);
      return;
    }

    // For relative paths (starting with /), just use them directly
    // This is more reliable for PDF export and avoids blob URL issues
    if (typeof src === 'string' && src.startsWith('/')) {
      setImgSrc(src);
      setError(false);
      return;
    }

    let objectUrl: string | null = null;

    const loadImage = async () => {
      try {
        if (typeof src !== 'string') {
          setError(true);
          return;
        }
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error(`Image not found at ${src}`);
        }
        const blob = await response.blob();
        objectUrl = URL.createObjectURL(blob);
        setImgSrc(objectUrl);
        setError(false);
      } catch (e) {
        console.error(`Failed to load image: ${src}`, e);
        setError(true);
      }
    };

    loadImage();

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [src]);

  if (error || !imgSrc) {
    return <>{fallback}</>;
  }

  // Use crossOrigin="anonymous" to help with CORS and canvas rendering
  return (
    <img 
      src={imgSrc} 
      onError={() => setError(true)} 
      crossOrigin="anonymous"
      {...props} 
    />
  );
};

export default SafeImage;
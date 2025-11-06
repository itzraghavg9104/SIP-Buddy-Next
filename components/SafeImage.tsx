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

    let objectUrl: string | null = null;

    const loadImage = async () => {
      try {
        // Fix: Explicitly check if `src` is a string before passing it to `fetch`.
        // This resolves a TypeScript error where `src` was inferred as `string | Blob`,
        // which is not a valid type for the `fetch` API's first argument.
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

  // The onError on the final img tag is a final safeguard, 
  // though the fetch logic should handle most cases.
  return <img src={imgSrc} onError={() => setError(true)} {...props} />;
};

export default SafeImage;

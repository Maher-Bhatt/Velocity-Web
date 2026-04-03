type OptimizedImageProps = {
  webp: string;
  fallback: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
  sizes?: string;
};

export const optimizedImages = {
  heroImage: "/images/hero.webp",
  heroImageFallback: "/images/hero.jpg",
  portfolioZtees: "/images/portfolio/ztees.webp",
  portfolioBounty: "/images/portfolio/bountychains.webp",
  portfolioITM: "/images/portfolio/itm-notes.webp",
} as const;

export function OptimizedImage({
  webp,
  fallback,
  alt,
  className,
  loading = "lazy",
  width,
  height,
  sizes,
}: OptimizedImageProps) {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" sizes={sizes} />
      <source srcSet={fallback} type="image/jpeg" sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
      />
    </picture>
  );
}

export type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: number;
};

export const ResponsiveImage: React.FC<ImageProps> = ({
  src,
  alt,
  className = "object-cover",
  aspectRatio = 1,
}) => {
  return (
    <picture className={`aspect-[${aspectRatio}]`}>
      <source srcSet={`${src}?w=640`} media="(max-width: 640px)" />
      <source srcSet={`${src}?w=1280`} media="(max-width: 1280px)" />
      <source srcSet={`${src}?w=1920`} media="(max-width: 1920px)" />
      <img src={src} alt={alt} className={className} />
    </picture>
  );
};

import React from "react";

export type ImageProps = {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  controls?: boolean;
};

export const ResponsiveVideo: React.FC<ImageProps> = ({
  src,
  className = "object-cover",
  autoPlay = true,
  loop = true,
  controls = false,
}) => {
  return src.endsWith(".mp4") || src.endsWith(".webm") ? (
    <video
      className={className}
      loop={loop}
      autoPlay={autoPlay}
      muted
      controls={controls}
      width="100%"
      height="100%"
      preload="auto"
    >
      <source src={src + "#t=0.1"} type="video/mp4" />
      <source src={src + "#t=0.1"} type="video/webm" />
    </video>
  ) : (
    <div className="flex items-center justify-center h-full w-full">
      <p>Unsupported video format</p>
    </div>
  );
};

/**
 * Component for rendering the Patreon icon as an SVG.
 *
 * @param {IconProps} props - The properties for the SVG element.
 * @returns {JSX.Element} The SVG representation of the Patreon icon.
 *
 * @typedef {Object} IconProps
 * @property {string} [className] - Optional CSS class to apply to the SVG element.
 * @property {string | number} [width] - Optional width of the SVG element.
 * @property {string | number} [height] - Optional height of the SVG element.
 * @property {string} [fill] - Optional fill color for the SVG element.
 */
import React from "react";
import { IconProps } from "@app/types/global";

export const PatreonIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M489.7 153.8c-.1-65.4-51-119-110.7-138.3C304.8-8.5 207-5 136.1 28.4 50.3 68.9 23.3 157.7 22.3 246.2 21.5 319 28.7 510.6 136.9 512c80.3 1 92.3-102.5 129.5-152.3 26.4-35.5 60.5-45.5 102.4-55.9 72-17.8 121.1-74.7 121-150z" />
    </svg>
  );
};

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

export const YoutubeIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6C14.9 167 14.9 256.4 14.9 256.4s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6V175.2l142.7 81.2-142.7 81.2z" />
    </svg>
  );
};

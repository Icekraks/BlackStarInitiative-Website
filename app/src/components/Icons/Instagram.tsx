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

export const InstagramIcon = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88c-2.14 0-3.88-1.74-3.88-3.88 0-2.14 1.74-3.88 3.88-3.88 2.14 0 3.88 1.74 3.88 3.88 0 2.14-1.74 3.88-3.88 3.88Zm5.92-9c-.05.12-.12.23-.21.33-.1.09-.21.16-.33.21a.995.995 0 0 1-1.09-.21c-.09-.1-.16-.21-.21-.33A.995.995 0 0 1 16 6.5c0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.23-.23.58-.34.9-.27.07.01.13.03.19.06.06.02.12.05.18.09.05.03.1.08.15.12.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38Z" />
    </svg>
  );
};

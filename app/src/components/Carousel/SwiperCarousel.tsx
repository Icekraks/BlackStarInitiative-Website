/**
 * Props for the SwiperCarousel component.
 *
 * @property {React.ReactNode} children - The child elements to be rendered inside the carousel.
 * @property {React.RefObject<SwiperRef>} parentRef - A reference to the parent Swiper instance.
 * @property {(swiper: Swiper) => void} [onSlideChange] - Optional callback function that is called when the slide changes.
 * @property {(swiper: Swiper) => void} [onSlideInit] - Optional callback function that is called when the slide is initialized.
 * @property {Object} [buttons] - Optional object containing references to the previous and next buttons.
 * @property {React.RefObject<HTMLButtonElement>} buttons.prev - Reference to the previous button element.
 * @property {React.RefObject<HTMLButtonElement>} buttons.next - Reference to the next button element.
 *
 * You can parse all the params besides "on" for the swiper options as there are setup functions to allow the parsing of the index to an external state.
 * Reference to Swiper API here for the params: https://swiperjs.com/swiper-api#parameters
 */

import { useEffect, useRef } from "react";
import type { Swiper } from "swiper";
import { register } from "swiper/element/bundle";
import type { SwiperOptions } from "swiper/types";

export type SwiperRef = HTMLElement & {
  swiper: Swiper;
  initialize: () => void;
};

type SwiperCarouselProps = {
  children: React.ReactNode;
  parentRef: React.RefObject<SwiperRef>;
  onSlideChange?: (swiper: Swiper) => void;
  onSlideInit?: (swiper: Swiper) => void;
  buttons?: {
    prev: React.RefObject<HTMLButtonElement>;
    next: React.RefObject<HTMLButtonElement>;
  };
} & Omit<SwiperOptions, "on">;

type SwiperCarouselSlideProps = {
  children: React.ReactNode;
  autoHeight?: boolean;
};

export const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
  children,
  parentRef,
  onSlideInit,
  onSlideChange,
  buttons,
  ...rest
}) => {
  useEffect(() => {
    // Register Swiper web component
    register();
    // pass component props to parameters
    const params = {
      on: {
        init: (swiper: Swiper) => {
          if (onSlideInit) {
            onSlideInit(swiper);
          }
          if (
            buttons &&
            buttons.prev &&
            buttons.next &&
            swiper.params.navigation &&
            swiper.params.navigation !== undefined &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = buttons.prev.current;
            swiper.params.navigation.nextEl = buttons.next.current;
          }
          swiper.navigation.init();
          swiper.navigation.update();
        },
        slideChange: (swiper: Swiper) => {
          if (onSlideChange) {
            onSlideChange(swiper);
          }
        },
      },
      ...rest,
    };

    if (!parentRef.current) return;

    // Assign it to swiper element
    Object.assign(parentRef.current, params);

    // initialize swiper
    parentRef.current.initialize();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <swiper-container
      init={false}
      ref={parentRef}
      style={{
        zIndex: 0,
      }}
    >
      {children}
    </swiper-container>
  );
};

export const SwiperSlide: React.FC<SwiperCarouselSlideProps> = (props) => {
  const { children, autoHeight = false, ...rest } = props;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <swiper-slide
      ref={ref}
      style={{
        height: autoHeight ? "auto" : "100%",
      }}
      {...rest}
    >
      {children}
    </swiper-slide>
  );
};

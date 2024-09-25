import React, { useRef } from "react";
import type { ObjectHero } from "@app/types/schema";
import { ChevronsDown, Mouse } from "lucide-react";
import { cn } from "@app/utils/utils";
import {
  SwiperCarousel,
  SwiperSlide,
  SwiperRef,
} from "@app/components/Carousel/SwiperCarousel";
import { HeroSlide } from "@app/components/Sections/Hero/HeroSlide";

type HeroProps = ObjectHero & {
  sectionIndex: number;
  showScrollDown?: boolean;
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  // image,
  content,
  showScrollDown = false,
  homeHero = false,
}) => {
  const splitTitle = title.split("#");
  const carouselRef = useRef<SwiperRef>(null);
  console.log(content);

  return (
    <>
      <div className="relative  h-[100dvh] max-h-[750px] lg:max-h-[1000px]">
        {content && content.length > 1 ? (
          <SwiperCarousel parentRef={carouselRef}>
            {content.map((item, index) => {
              return (
                <SwiperSlide key={index} height="100dvh">
                  <HeroSlide content={item} />
                </SwiperSlide>
              );
            })}
          </SwiperCarousel>
        ) : content && content.length === 1 ? (
          <HeroSlide content={content[0]} />
        ) : null}

        <div className="px-4 flex w-full flex-col items-center justify-center gap-3 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="flex flex-col">
            {homeHero ? (
              <h1 className="flex gap-1.5 md:gap-2 lg:gap-4 align-bottom">
                {splitTitle.map((titlePart, index) => (
                  <span
                    key={index}
                    className={cn(
                      index === 1
                        ? "block text-bsi-red heading-1 text-xl md:text-3xl lg:text-4xl mt-0.5 md:mt-1.5 lg:mt-2"
                        : "block text-bsi-white heading-2 text-3xl md:text-5xl lg:text-6xl leading-none"
                    )}
                  >
                    {titlePart}
                  </span>
                ))}
              </h1>
            ) : (
              <h1 className="heading-1 text-2xl md:text-4xl lg:text-6xl text-bsi-red">
                {title}
              </h1>
            )}

            <h4 className="heading-2 text-xl md:text-2xl lg:text-4xl text-bsi-white">
              {subtitle}
            </h4>
          </div>
        </div>
        {showScrollDown && (
          <div
            onClick={() => {
              const element = document.querySelector("#section-1");
              if (element) {
                const header: HTMLDivElement | null =
                  document.querySelector("#headerElement");
                const headerOffset = header?.offsetHeight || 130;
                const elementPosition =
                  element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className="block bottom-8 left-[50%] translate-x-[50%] absolute animate-bounce cursor-pointer"
          >
            <Mouse size={32} color="var(--bsi-white)" />
            <ChevronsDown size={32} color="var(--bsi-white)" />
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;

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
  content,
  showScrollDown = false,
  homeHero = false,
  autoplay,
}) => {
  const splitTitle = title.split("#");
  const carouselRef = useRef<SwiperRef>(null);

  return (
    <div className="relative  h-[100dvh] max-h-[1000px]">
      {content && content.length > 1 ? (
        <SwiperCarousel
          parentRef={carouselRef}
          autoplay={{
            delay: autoplay,
            disableOnInteraction: false,
          }}
          loop
        >
          {content.map((item, index) => {
            return (
              <SwiperSlide key={index} height="100dvh" maxHeight="1000px">
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
            <h1 className="flex md:gap-5 flex-col items-start md:flex-row md:items-center mb-1">
              {splitTitle.map((titlePart, index) => {
                if (index === 1) {
                  const letterArray = titlePart.split("");
                  return (
                    <div
                      key={index}
                      className="flex gap-3 md:gap-4 ml-0.5 md:mt-1"
                    >
                      {letterArray.map((letter, index) => (
                        <span
                          key={index}
                          className="uppercase text-bsi-red heading-1 text-1.5xl md:text-3.5xl lg:text-4.5xl"
                        >
                          {letter}
                        </span>
                      ))}
                    </div>
                  );
                } else {
                  return (
                    <span
                      key={index}
                      className="uppercase text-bsi-white heading-2 text-3xl md:text-5xl lg:text-6xl mr-auto md:mr-none"
                    >
                      {titlePart}
                    </span>
                  );
                }
              })}
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
  );
};

export default Hero;

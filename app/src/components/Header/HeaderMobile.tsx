import { Button } from "@app/theme/ui/button";
import type { RootLoaderData } from "@app/types/global";
import { Link as RemixLink, useRouteLoaderData } from "@remix-run/react";
import { HeaderFooter } from "@app/components/Header/HeaderFooter";
import { cn } from "@app/utils/utils";
import { Menu, X } from "lucide-react";

export type HeaderMobileProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isScrolled: boolean;
};

export const HeaderMobile: React.FC<HeaderMobileProps> = ({
  isOpen,
  setIsOpen,
  isScrolled,
}: HeaderMobileProps) => {
  const root = useRouteLoaderData("root") as RootLoaderData;

  return (
    <>
      <div
        className={cn(
          "flex lg:hidden items-center justify-between py-2 -mb-[100%] px-4 border-b-[1px] border-bsi-white transition-background ease-in-out duration-100",
          isScrolled ? "bg-bsi-black" : "bg-black bg-opacity-50"
        )}
      >
        <Button
          variant="default"
          className="z-50 px-2 bg-transparent"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Menu />
        </Button>
        <div className="flex ml-auto mr-auto justify-center">
          <RemixLink to="/">
            <div className="flex items-center gap-2">
              <img className="w-[3rem] h-[3rem]" src="/icons/BSIIconN.svg" />
              <h1 className="heading-1 text-bsi-red text-base">
                {root.navigation.headerTitle || "Black Star Initiative"}
              </h1>
            </div>
          </RemixLink>
        </div>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed top-0 left-0 w-full h-full z-[49] bg-black opacity-20 cursor-pointer",
          isOpen ? "block" : "hidden"
        )}
      />
      <div
        className={cn(
          "lg:hidden fixed transition-transform top-0 left-0 w-[90dvw] max-w-[400px] bg-bsi-black h-[100dvh] px-4 pt-4 pb-4 z-50",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="relative h-full flex flex-col">
          <div className="header flex">
            {/* <h1>{root.navigation.headerTitle}</h1> */}
            <Button className="ml-[auto]" onClick={() => setIsOpen(false)}>
              <X />
            </Button>
          </div>
          <div className="flex flex-col gap-4 flex-grow overflow-y-auto py-4">
            {/* {root.navigation.header.linksNew.map(
              (link: LinkObject, index: number) => {
                return (
                  <Button
                    key={index}
                    variant="secondary"
                    asChild={!link.link.link.includes("#")}
                    onClick={() => {
                      if (link.link.link.includes("#")) {
                        const element = document.querySelector(link.link.link);
                        if (element) {
                          setIsOpen(false);
                          if (index === 0) {
                            window.location.hash = "";
                            window.scrollTo({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          } else {
                            window.location.hash = link.link.link;
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }
                      setIsOpen(false);
                    }}
                  >
                    {!link.link.link.includes("#") ? (
                      <RemixLink
                        key={index}
                        to={link.link.link}
                        target={link.link.external ? "_blank" : ""}
                        rel="noreferrer"
                      >
                        {link.link.title}
                      </RemixLink>
                    ) : (
                      link.link.title
                    )}
                  </Button>
                );
              }
            )} */}
          </div>

          <div className="mt-auto pt-4 mb-6">
            <div className="flex lg:flex-col justify-center items-center gap-2 lg:gap-8">
              <HeaderFooter social={root.social} />
            </div>
          </div>

          {/* <div className="flex items-center justify-center">
            <h4 className="text-secondary text-md lg:text-xl">{`${new Date().getFullYear()} © Felix Hu`}</h4>
          </div> */}
        </div>
      </div>
    </>
  );
};

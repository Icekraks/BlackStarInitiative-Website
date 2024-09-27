import { Button } from "@app/theme/ui/button";
import type { LinkObject, RootLoaderData } from "@app/types/global";
import { Link as RemixLink, useRouteLoaderData } from "@remix-run/react";
import { HeaderFooter } from "@app/components/Header/HeaderFooter";
import { LogoMobile } from "@app/components/LogoMobile";
import { Logo } from "@app/components/Logo";
import { cn } from "@app/utils/utils";
import { Menu, X } from "lucide-react";
import useLink from "@app/hooks/useLink";

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
  const { urlResolver } = useLink();

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
          <Logo />
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
          <div className="header flex mb-2">
            <LogoMobile />
            <Button className="ml-[auto]" onClick={() => setIsOpen(false)}>
              <X />
            </Button>
          </div>
          <div className="flex flex-col gap-4 flex-grow overflow-y-auto py-4">
            <Button
              variant="quaternary"
              asChild
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <RemixLink to="/" rel="noreferrer">
                Home
              </RemixLink>
            </Button>
            {root.navigation.header.links.map(
              (link: LinkObject, index: number) => {
                const resolvedUrl = urlResolver(link);
                return (
                  <Button
                    key={index}
                    variant="quaternary"
                    asChild
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <RemixLink
                      key={index}
                      to={resolvedUrl.url}
                      target={resolvedUrl.external ? "_blank" : ""}
                      rel="noreferrer"
                    >
                      {resolvedUrl.label}
                    </RemixLink>
                  </Button>
                );
              }
            )}
            {root.social.discord && (
              <Button variant="tertiary" size="default" asChild>
                <RemixLink to={root.social.discord} target="_blank">
                  <div className="flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      className="w-[1.5rem] h-[1.5rem] fill-current"
                    >
                      <path d="M524.5 69.8a1.5 1.5 0 0 0-.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0-1.9.9 337.5 337.5 0 0 0-14.9 30.6 447.8 447.8 0 0 0-134.4 0 309.5 309.5 0 0 0-15.1-30.6 1.9 1.9 0 0 0-1.9-.9 483.7 483.7 0 0 0-119.8 37.1 1.7 1.7 0 0 0-.8.7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7 348.2 348.2 0 0 0 30-48.8 1.9 1.9 0 0 0-1-2.6 321.2 321.2 0 0 1-45.9-21.9 1.9 1.9 0 0 1-.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9.2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1-.2 3.1 301.4 301.4 0 0 1-45.9 21.8 1.9 1.9 0 0 0-1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1.7 486 486 0 0 0 147.2-74.1 1.9 1.9 0 0 0 .8-1.4c12.2-126.7-20.6-236.8-87-334.5zm-302 267.8c-29 0-52.8-26.6-52.8-59.2s23.4-59.3 52.8-59.3c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.3-52.8 59.3zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.3-59.3 52.8-59.3c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.3-52.8 59.3z" />
                    </svg>
                    Join Us
                  </div>
                </RemixLink>
              </Button>
            )}
          </div>

          <div className="mt-auto pt-4 mb-6">
            <div className="flex lg:flex-col justify-center items-center gap-2 lg:gap-8">
              <HeaderFooter social={root.social} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

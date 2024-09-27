import useLink from "@app/hooks/useLink";
import { Button } from "@app/theme/ui/button";
import { RootLoaderData } from "@app/types/global";
import { Link as RemixLink, useRouteLoaderData } from "@remix-run/react";
import React from "react";
import { Logo } from "@app/components/Logo";
import { Disclaimer } from "@app/components/Disclaimer";

const Footer: React.FC<React.PropsWithChildren> = () => {
  const { navigation } = useRouteLoaderData("root") as RootLoaderData;
  const { urlResolver } = useLink();

  return (
    <div className="py-12 px-8 lg:px-16 bg-bsi-black">
      <div className="flex w-full max-w-screen-2xl mx-auto gap-4">
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-4">
          <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row w-full lg:w-1/3 justify-between lg:justify-start">
            <Disclaimer className="w-full md:w-1/2 lg:w-full" />
            <div className="hidden md:block lg:hidden">
              <RemixLink to="/">
                <Logo stacked />
              </RemixLink>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-4 lg:gap-0 w-full lg:flex-row lg:w-2/3">
            {navigation.footer && navigation.footer.links && (
              <nav className="flex flex-col items-start lg:grid lg:grid-cols-2 2xl:flex 2xl:flex-row -ml-2 lg:ml-0 lg:-mt-2">
                <Button
                  className="underline justify-start"
                  asChild
                  variant="link"
                >
                  <RemixLink to="/" rel="noreferrer">
                    Home
                  </RemixLink>
                </Button>
                {navigation.footer.links.map((link, index) => {
                  const builtLink = urlResolver(link);
                  return (
                    <Button
                      key={index}
                      className="underline justify-start"
                      asChild
                      variant="link"
                    >
                      <RemixLink
                        className="whitespace-pre-wrap"
                        to={builtLink.url}
                        target={builtLink.external ? "_blank" : ""}
                        rel="noreferrer"
                      >
                        {builtLink.label}
                      </RemixLink>
                    </Button>
                  );
                })}
              </nav>
            )}
            <div className="block md:hidden lg:block lg:ml-auto">
              <RemixLink to="/">
                <Logo stacked />
              </RemixLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

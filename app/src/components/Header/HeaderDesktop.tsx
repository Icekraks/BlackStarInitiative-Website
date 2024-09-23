import {
  Link as RemixLink,
  useLocation,
  useRouteLoaderData,
} from "@remix-run/react";
import { RootLoaderData } from "@app/types/global";
import { Button } from "@app/theme/ui/button";
import { Home, Phone, User, ArrowRightSquare, Puzzle } from "lucide-react";
import { HeaderFooter } from "@app/components/Header/HeaderFooter";

export const HeaderDesktop: React.FC = () => {
  const root = useRouteLoaderData("root") as RootLoaderData;

  return (
    <>
      <div className="hidden lg:flex items-center justify-between gap-2 lg:gap-8 mx-auto px-8 py-4 border-bsi-white border-b-[1px]">
        <RemixLink to="/">
          <div className="flex items-center gap-2">
            <img className="w-[3rem] h-[3rem]" src="/icons/BSIIconN.svg" />
            <h1 className="heading-1 text-bsi-red text-2xl">
              {root.navigation.headerTitle || "Black Star Initiative"}
            </h1>
          </div>
        </RemixLink>

        {root.social.discord && (
          <div className="flex gap-1 items-center">
            <Button variant="tertiary" size="default" asChild>
              <RemixLink to={root.social.discord} target="_blank">
                <div className="flex gap-1 items-center">
                  Join Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-[1.5rem] h-[1.5rem] fill-current"
                  >
                    <path d="M524.5 69.8a1.5 1.5 0 0 0-.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0-1.9.9 337.5 337.5 0 0 0-14.9 30.6 447.8 447.8 0 0 0-134.4 0 309.5 309.5 0 0 0-15.1-30.6 1.9 1.9 0 0 0-1.9-.9 483.7 483.7 0 0 0-119.8 37.1 1.7 1.7 0 0 0-.8.7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7 348.2 348.2 0 0 0 30-48.8 1.9 1.9 0 0 0-1-2.6 321.2 321.2 0 0 1-45.9-21.9 1.9 1.9 0 0 1-.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9.2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1-.2 3.1 301.4 301.4 0 0 1-45.9 21.8 1.9 1.9 0 0 0-1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1.7 486 486 0 0 0 147.2-74.1 1.9 1.9 0 0 0 .8-1.4c12.2-126.7-20.6-236.8-87-334.5zm-302 267.8c-29 0-52.8-26.6-52.8-59.2s23.4-59.3 52.8-59.3c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.3-52.8 59.3zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.3-59.3 52.8-59.3c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.3-52.8 59.3z" />
                  </svg>
                </div>
              </RemixLink>
            </Button>
          </div>
        )}
      </div>

      {/* <div className="flex items-center justify-center">
        <h4 className="font-sans text-secondary text-md lg:text-xl sidewaysText">{`${new Date().getFullYear()} © Felix Hu`}</h4>
      </div> */}
    </>
  );
};

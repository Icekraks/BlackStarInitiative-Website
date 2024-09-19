import {
  Link as RemixLink,
  useLocation,
  useRouteLoaderData,
} from "@remix-run/react";
import { RootLoaderData } from "@app/types/global";
import { Button } from "@app/theme/ui/button";
import { HeaderFooter } from "./HeaderFooter";
import { Home, Phone, User, ArrowRightSquare, Puzzle } from "lucide-react";

export const HeaderDesktop: React.FC = () => {
  const root = useRouteLoaderData("root") as RootLoaderData;

  const location = useLocation();

  return (
    <div
      className={
        "sticky transition-transform top-0 left-0 w-full lg:max-w-[5rem] hidden lg:flex flex-col bg-[#002b36] h-[100dvh] justify-between  pt-12 pb-4 px-5 lg:pt-12 md:pb-12 "
      }
    >
      <div className="flex lg:flex-col justify-center items-center gap-2 lg:gap-8">
        {location.pathname !== "/" && (
          <Button
            className="hidden md:inline-flex"
            variant="outline"
            size="icon"
            asChild
          >
            <RemixLink to="/">
              <Home />
            </RemixLink>
          </Button>
        )}
        {location.pathname !== "/" &&
          root.navigation.header.linksNew.map((link, index) => (
            <Button variant="outline" size="icon" asChild key={index}>
              <RemixLink aria-label={link.link.title} to={link.link.link}>
                {link.icon === "Home" ? (
                  <Home />
                ) : link.icon === "about" ? (
                  <User />
                ) : link.icon === "contact" ? (
                  <Phone />
                ) : link.icon === "components" ? (
                  <Puzzle />
                ) : link.icon === "other" ? (
                  <ArrowRightSquare />
                ) : null}
              </RemixLink>
            </Button>
          ))}
        {location.pathname === "/" && <HeaderFooter social={root.social} />}
      </div>

      <div className="flex items-center justify-center">
        <h4 className="font-sans text-secondary text-md lg:text-xl sidewaysText">{`${new Date().getFullYear()} © Felix Hu`}</h4>
      </div>
    </div>
  );
};

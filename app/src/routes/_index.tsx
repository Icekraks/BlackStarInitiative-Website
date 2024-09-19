import LoadingBarAnimation from "@app/components/LoadingBarAnimation";
import { ResponsiveImage } from "@app/components/ResponsiveImage";
import { INDEX_QUERY } from "@app/graphql/queries";
import { Button } from "@app/theme/ui/button";
import { LinkObject, RootLoaderData } from "@app/types/global";
import { defer } from "@remix-run/node";
import {
  Link as RemixLink,
  useLoaderData,
  useRouteLoaderData,
} from "@remix-run/react";
import { SanityClient } from "@root/server";

export default function Index() {
  const root = useRouteLoaderData("root") as RootLoaderData;
  const { title, subtitle, description, image, file } =
    useLoaderData<typeof loader>();

  return (
    <div className="w-[100%] py-12 px-8 lg:py-16 2xl:py-24 lg:px-16 h-[93dvh]">
      <LoadingBarAnimation />
      <div className="flex flex-col-reverse lg:flex-row justify-center gap-x-[10rem] gap-y-[2.5rem] max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center lg:items-start gap-3">
          {image && image.asset && (
            <ResponsiveImage
              className="w-[375px] rounded-lg overflow-hidden"
              src={image.asset.url}
              alt={image.asset.altText}
            />
          )}
          <h1 className="font-sans mt-4 text-4xl lg:text-6xl font-bold text-[#002b36]">
            {title}
          </h1>
          <h4 className="font-sans text-[#cb4b16]">{subtitle}</h4>
          {description && (
            <p className="text-primary max-w-[450px]">
              {description.replace("{x}", `${new Date().getFullYear() - 2020}`)}
            </p>
          )}
          <div>
            {file && (
              <Button variant="default" asChild>
                <a href={file.asset.url} download target="_blank">
                  Get my CV
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-8">
          {root.navigation.header.linksNew.map(
            (link: LinkObject, index: number) => {
              return (
                <Button
                  key={index}
                  variant="link"
                  asChild={!link.link.link.includes("#")}
                  className="text-wrap lg:text-4xl h-[unset] px-0 justify-start"
                  size="lg"
                  onClick={() => {
                    if (link.link.link.includes("#")) {
                      const element = document.querySelector(link.link.link);
                      if (element) {
                        window.location.hash = link.link;
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }
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
          )}
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  const response = await SanityClient.fetch(INDEX_QUERY);

  return defer({
    ...response,
  });
}

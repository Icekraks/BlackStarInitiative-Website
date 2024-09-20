import Sections from "@app/components/Sections/Sections";
import { INDEX_QUERY } from "@app/graphql/queries";
import { RootLoaderData } from "@app/types/global";
import { defer } from "@remix-run/node";
import {
  Link as RemixLink,
  useLoaderData,
  useRouteLoaderData,
} from "@remix-run/react";
import { SanityClient } from "@root/server";

export default function Index() {
  const root = useRouteLoaderData("root") as RootLoaderData;
  const { sections } = useLoaderData<typeof loader>();
  return (
    <div className="w-[100%] py-12 px-8 lg:py-16 2xl:py-24 lg:px-16">
      <Sections sections={sections} />
    </div>
  );
}

export async function loader() {
  const response = await SanityClient.fetch(INDEX_QUERY);

  return defer({
    ...response,
  });
}

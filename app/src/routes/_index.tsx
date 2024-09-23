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

  const { sections } = useLoaderData<typeof loader>();
  return (
    <div>
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

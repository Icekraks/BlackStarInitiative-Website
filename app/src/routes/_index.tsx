import Sections from "@app/components/Sections/Sections";
import { INDEX_QUERY } from "@app/graphql/queries";
import { defer } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
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

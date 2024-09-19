import Sections from "@app/components/Sections/Sections";
import { PAGE_QUERY } from "@app/graphql/queries/page";

import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { SanityClient } from "@root/server";

const Page: React.FC = () => {
  const { sections } = useLoaderData<typeof loader>();
  return (
    <div className="w-[100%] py-12 px-8 lg:py-16 2xl:py-24 lg:px-16">
      <Sections sections={sections} />
    </div>
  );
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { handle } = params;
  const response = await SanityClient.fetch(PAGE_QUERY, { handle: handle });
  if (!response) throw new Response(null, { status: 404 });

  return json({
    ...response,
  });
}

export default Page;

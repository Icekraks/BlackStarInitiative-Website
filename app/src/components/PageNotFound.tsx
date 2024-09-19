import { RootLoaderData } from "@app/types/global";
import { useRouteLoaderData } from "@remix-run/react";

const PageNotFound: React.FC = () => {
  const root = useRouteLoaderData("root") as RootLoaderData;
  const { title, description } = root.notFound;

  return (
    <div className="w-[100%] py-12 px-8 lg:py-16 2xl:py-24 lg:px-16 h-[93dvh] flex flex-col items-center justify-center">
      <h1 className="mt-4 text-4xl lg:text-6xl font-bold text-[#002b36] mb-4 text-center">
        {title}
      </h1>
      <p className="text-primary md:px-10 lg:px-16 mb-8 w-full text-center">
        {description}
      </p>
    </div>
  );
};

export default PageNotFound;

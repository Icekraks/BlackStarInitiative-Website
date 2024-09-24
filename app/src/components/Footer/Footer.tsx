import { RootLoaderData } from "@app/types/global";
import { useRouteLoaderData } from "@remix-run/react";
import React from "react";

const Footer: React.FC<React.PropsWithChildren> = () => {
  const { footer } = useRouteLoaderData("root") as RootLoaderData;

  return (
    <div className="py-12 px-8 lg:px-16 bg-bsi-black">
      <div className="flex w-full max-w-[1440px] mx-auto gap-4">
        <div>
          <img className="w-[6rem]" src="/icons/MadeByTheCommunity.png" />
        </div>
        {footer.disclaimer && (
          <p className="text-bsi-white text-xxs max-w-[200px] md:max-w-[375px]">{`${new Date().getFullYear()} © ${
            footer.disclaimer
          }`}</p>
        )}
      </div>
    </div>
  );
};

export default Footer;

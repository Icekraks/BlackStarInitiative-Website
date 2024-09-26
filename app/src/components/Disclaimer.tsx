import React from "react";
import { RootLoaderData } from "@app/types/global";
import { useRouteLoaderData } from "@remix-run/react";

type DisclaimerProps = {
  className?: string;
};

export const Disclaimer: React.FC<DisclaimerProps> = ({ className }) => {
  const { footer } = useRouteLoaderData("root") as RootLoaderData;
  return (
    <div className={`flex gap-4 ${className}`}>
      <div>
        <img
          className="w-[3.5rem] md:w-[7.25rem]"
          src="/icons/MadeByTheCommunity.png"
        />
      </div>
      {footer.disclaimer && (
        <p
          className="text-bsi-white text-xxs"
          style={{ width: "calc(100% - 7.25rem)" }}
        >{`${new Date().getFullYear()} © ${footer.disclaimer}`}</p>
      )}
    </div>
  );
};

import React from "react";

const Footer: React.FC<React.PropsWithChildren> = () => {
  return (
    <div className="py-4 px-8 lg:px-16">
      <div className="flex justify-end w-full max-w-[1440px] mx-auto">
        <h4 className="text-primary text-xl md:text-2xl">{`${new Date().getFullYear()} © Felix Hu`}</h4>
      </div>
    </div>
  );
};

export default Footer;

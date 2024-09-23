import { LinkObject } from "@app/types/global";

const useLink = () => {
  const linkBuilder = (link: LinkObject) => {
    console.log(link);
  };

  return { linkBuilder };
};

export { useLink };

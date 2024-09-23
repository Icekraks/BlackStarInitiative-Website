import { LinkObject } from "@app/types/global";

const useLink = () => {
  const urlResolver = (link: LinkObject) => {
    if (link.type) {
      return {
        label: link.external?.title || "",
        url: link.external?.link || "",
      };
    } else {
      return {
        label: link.internal?.title || "",
        url: `/${link.internal?.document.slug.current}` || "",
      };
    }
  };

  return { urlResolver };
};

export default useLink;

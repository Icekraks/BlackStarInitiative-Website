import { FlexibleLink } from "@app/types/schema";

const useLink = () => {
  const urlResolver = (link: FlexibleLink) => {
    if (link.type) {
      return {
        label: link.external?.title || "",
        url: link.external?.link || "",
        external: true,
      };
    } else {
      return {
        label: link.internal?.title || "",
        url: `/${link.internal?.document.slug.current}` || "",
        external: false,
      };
    }
  };

  return { urlResolver };
};

export default useLink;

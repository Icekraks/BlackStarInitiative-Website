import { PortableText } from "@portabletext/react";
import { Link } from "@remix-run/react";

export const useContent = () => {
  const richTextComponents = {
    types: {
      table: ({ value }: any) => {
        const { rows } = value;

        return null;
      },
    },
    marks: {
      link: ({ children, value }: { children: any; value: any }) => {
        const to = value?.link?.link ? value?.link?.link : null;
        const isExternal = value?.link?.external;

        return (
          <Link
            to={to}
            target={isExternal ? "_blank" : ""}
            className="text-bsi-white underline"
          >
            {children}
          </Link>
        );
      },
      alignCenter: ({ children }: { children: any }) => {
        return <div className="text-center">{children}</div>;
      },
      alignRight: ({ children }: { children: any }) => {
        return <div className="text-right">{children}</div>;
      },
      redText: ({ children }: { children: any }) => {
        return <span className="text-bsi-red">{children}</span>;
      },
      blackText: ({ children }: { children: any }) => {
        return <span className="text-bsi-black">{children}</span>;
      },
    },
    block: {
      normal: ({ children }: { children: any }) => {
        return (
          <p className="font-body text-sm lg:text-base text-bsi-white mb-2">
            {children}
          </p>
        );
      },
      h1: ({ children }: { children: any }) => {
        return (
          <h1 className="heading-2 text-2.5xl lg:text-4.5xl text-bsi-white mb-6">
            {children}
          </h1>
        );
      },
      h2: ({ children }: { children: any }) => {
        return (
          <h2 className="heading-2 text-bsi-white text-2xl lg:text-4xl mb-4">
            {children}
          </h2>
        );
      },
      h3: ({ children }: { children: any }) => {
        return (
          <h3 className="heading-2 text-bsi-white text-1.5xl lg:text-2.5xl mb-4">
            {children}
          </h3>
        );
      },
      h4: ({ children }: { children: any }) => {
        return (
          <h4 className="heading-2 text-bsi-white text-xl lg:text-2xl mb-2">
            {children}
          </h4>
        );
      },
      largeParagraph: ({ children }: { children: any }) => {
        return (
          <p className="font-body text-base lg:text-lg text-bsi-white mb-2">
            {children}
          </p>
        );
      },
      smallParagraph: ({ children }: { children: any }) => {
        return (
          <p className="font-body text-xs lg:text-sm text-bsi-white mb-2">
            {children}
          </p>
        );
      },
    },
    list: {
      bullet: ({ children }: { children: any }) => {
        return null;
      },
      number: ({ children }: { children: any }) => {
        return null;
      },
    },
    listItem: {
      bullet: ({ children, value }: { children: any; value: any }) => {
        return null;
      },
      number: ({ children, value }: { children: any; value: any }) => {
        return null;
      },
    },
  };

  // TODO: fix typing error
  const formatContent = (content: any) => {
    return <PortableText value={content} components={richTextComponents} />;
  };

  return { formatContent };
};

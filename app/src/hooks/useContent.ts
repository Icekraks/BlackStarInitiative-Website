import { PortableText } from "@portabletext/react";

export const useContent = () => {
  const richTextComponents = {
    types: {
      table: ({ value }: any) => {
        const { rows } = value;

        return (
          // <TableContainer marginY={7.5}>
          //   <Table overflow="scroll" variant="simple">
          //     <Tbody>
          //       {rows.map((row: { cells: string[]; _key: string }) => (
          //         <Tr key={row._key}>
          //           {row.cells.map((cell: string) => {
          //             return (
          //               <Td
          //                 key={cell}
          //                 paddingLeft={0}
          //                 textAlign="left"
          //                 borderBottom="1px solid"
          //                 borderBottomColor="brand.lightGrey"
          //                 paddingY={4}
          //                 style={{
          //                   fontVariantNumeric: "normal",
          //                 }}
          //               >
          //                 {cell.includes("https://") ||
          //                 cell.includes("http://") ? (
          //                   <Link
          //                     color="currentColor"
          //                     to={cell}
          //                     chakraLinkProps={{
          //                       isExternal: true,
          //                       textDecoration: "underline",
          //                     }}
          //                   >
          //                     {cell}
          //                   </Link>
          //                 ) : (
          //                   cell
          //                 )}
          //               </Td>
          //             );
          //           })}
          //         </Tr>
          //       ))}
          //     </Tbody>
          //   </Table>
          // </TableContainer>
        );
      },
    },
    marks: {
      link: ({ children, value }: { children: any; value: any }) => {
        // const to = value?.link?.link ? value?.link?.link : null;
        // const chakraLinkProps = {
        //   isExternal: value?.link?.external,
        // };

        // if (to) {
        //   // eslint-disable-next-line prettier/prettier
        //   return (
        //     <Link
        //       color="currentColor"
        //       to={to}
        //       chakraLinkProps={chakraLinkProps}
        //       style={{
        //         display: "inline-block",
        //         fontSize: "inherit",
        //         fontWeight: "inherit",
        //         lineHeight: "inherit",
        //       }}
        //     >
        //       <Text
        //         textDecoration="underline"
        //         style={{
        //           fontSize: "inherit",
        //           fontWeight: "inherit",
        //           lineHeight: "inherit",
        //         }}
        //       >
        //         {children}
        //       </Text>
        //     </Link>
        //   );
        // } else {
        //   return <Text as="span">{children}</Text>;
        // }
      },
      alignCenter: ({ children }: { children: any }) => (
        // <Box textAlign="center">{children}</Box>
      ),
      alignRight: ({ children }: { children: any }) => (
        // <Box textAlign="right">{children}</Box>
      ),
    },
    block: {
      normal: ({ children }: { children: any }) => (children
        // <Text marginBottom={7.5} fontWeight="normal" size="smallParagraph">
        //   {children}
        // </Text>
      ),
      h1: ({ children }: { children: any }) => (
        // <Heading as="h1" marginBottom={7.5} fontWeight="normal" size="h1">
        //   {children}
        // </Heading>
      ),
      h2: ({ children }: { children: any }) => (
        // <Heading as="h2" marginBottom={7.5} fontWeight="normal" size="h2">
        //   {children}
        // </Heading>
      ),
      h3: ({ children }: { children: any }) => (
        // <Heading as="h3" marginBottom={7.5} fontWeight="normal" size="h3">
        //   {children}
        // </Heading>
      ),
      h4: ({ children }: { children: any }) => (
        // <Heading as="h4" marginBottom={7.5} fontWeight="normal" size="h4">
        //   {children}
        // </Heading>
      ),
      largeParagraph: ({ children }: { children: any }) => (
        // <Text marginBottom={7.5} fontWeight="normal" size="largeParagraph">
        //   {children}
        // </Text>
      ),
      mediumParagraph: ({ children }: { children: any }) => (
        // <Text marginBottom={7.5} fontWeight="normal" size="mediumParagraph">
        //   {children}
        // </Text>
      ),
      smallParagraph: ({ children }: { children: any }) => (
        // <Text marginBottom={7.5} fontWeight="normal" size="smallParagraph">
        //   {children}
        // </Text>
      ),
    },
    list: {
      bullet: ({ children }: { children: any }) => (
        // <UnorderedList
        //   sx={{
        //     li: {
        //       paddingInlineStart: 0,
        //       paddingInlineEnd: 0,
        //     },
        //   }}
        //   marginLeft={5}
        //   fontSize="inherit"
        //   fontWeight="inherit"
        //   lineHeight="inherit"
        //   css={{
        //     paddingInlineStart: "0 !important",
        //     paddingInlineEnd: "0 !important",
        //   }}
        //   listStylePosition="outside"
        //   marginX="auto"
        //   paddingX={{ base: 6, md: 8 }}
        // >
        //   {children}
        // </UnorderedList>
      ),
      number: ({ children }: { children: any }) => (
        // <OrderedList
        //   sx={{
        //     li: {
        //       paddingInlineStart: 0,
        //       paddingInlineEnd: 0,
        //     },
        //   }}
        //   fontSize="inherit"
        //   fontWeight="inherit"
        //   lineHeight="inherit"
        //   css={{
        //     paddingInlineStart: "0 !important",
        //     paddingInlineEnd: "0 !important",
        //   }}
        //   marginX="auto"
        //   paddingX={{ base: 0, md: 0 }}
        // >
        //   {children}
        // </OrderedList>
      ),
    },
    listItem: {
      bullet: ({ children, value }: { children: any; value: any }) => {
        return (
          // <ListItem
          //   sx={{
          //     li: {
          //       paddingInlineStart: 0,
          //       paddingInlineEnd: 0,
          //     },
          //     "& > *": {
          //       display: "inline",
          //     },
          //   }}
          //   fontSize={
          //     matchingTextTheme?.fontSize ||
          //     TextThemeConfig.sizes.smallParagraph.fontSize
          //   }
          //   fontWeight="inherit"
          //   lineHeight={
          //     matchingTextTheme?.lineHeight ||
          //     TextThemeConfig.sizes.smallParagraph.lineHeight
          //   }
          //   marginX="auto"
          //   paddingX={{ base: 6, md: 8 }}
          // >
          //   {children}
          // </ListItem>
        );
      },
      number: ({ children, value }: { children: any; value: any }) => {
        // const matchingTextTheme =
        //   TextThemeConfig?.sizes?.[
        //     value?.style as keyof typeof TextThemeConfig.sizes
        //   ];

        // const isBold = value?.children?.[0]?.marks?.some(
        //   (mark: string) => mark === "strong"
        // );

        return (
          // <ListItem
          //   sx={{
          //     li: {
          //       paddingInlineStart: 0,
          //       paddingInlineEnd: 0,
          //     },
          //     "& > *": {
          //       display: "inline",
          //     },
          //   }}
          //   fontSize={matchingTextTheme?.fontSize || "inherit"}
          //   fontWeight={isBold ? "bold" : "inherit"}
          //   lineHeight={matchingTextTheme?.lineHeight || "inherit"}
          //   marginX="auto"
          //   paddingX={{ base: 6, md: 8 }}
          // >
          //   {children}
          // </ListItem>
        );
      },
    },
  };

  // TODO: fix typing error
  const formatContent = (content: any) => (
    <PortableText value={content} components={richTextComponents} />
  );

  return { formatContent };
};

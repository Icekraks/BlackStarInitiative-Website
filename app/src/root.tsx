import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  defer,
} from "@remix-run/react";
import { SanityClient } from "@root/server";
import { ROOT_QUERY } from "@app/graphql/queries/root";
import { Layout } from "@app/components/Layout/Layout";
import styles from "@app/globals.css";
import PageNotFound from "@app/components/PageNotFound";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

const App = () => {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
};

const Document = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
        {children}
      </body>
    </html>
  );
};

export const ErrorBoundary = () => {
  return (
    <Document>
      <Layout>
        <PageNotFound />
      </Layout>
    </Document>
  );
};

export default App;

export async function loader() {
  const response = await SanityClient.fetch(ROOT_QUERY);

  return defer({
    ...response,
  });
}

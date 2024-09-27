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
  redirect,
} from "@remix-run/react";
import { commitSession, getSession } from "@app/helpers/session.server";
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

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const cookieMaintainance = await session.get("maintainanceMode");
  const response = await SanityClient.fetch(ROOT_QUERY);

  const pathname = new URL(request.url).pathname;
  const url = request.url;

  const passwordEnabled =
    !pathname.includes("/api/") &&
    response?.maintenance?.maintenanceMode &&
    cookieMaintainance !== "true";

  if (passwordEnabled && !url.includes("/password")) {
    return redirect(`/password?continue=${pathname}`);
  }

  return defer(
    {
      ...response,
      passwordEnabled,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

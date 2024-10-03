import React from "react";

import { PASSWORD_PAGE_QUERY } from "../graphql/queries/password";
import { json, redirect, useLoaderData } from "@remix-run/react";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { SanityClient } from "@root/server";
import { getSession, commitSession } from "@app/helpers/session.server";
import { Maintenance } from "@app/components/Maintainance/Maintainance";

const PasswordPage = () => {
  const { page } = useLoaderData<typeof loader>();

  return <Maintenance {...page} />;
};

export default PasswordPage;

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  const [formData] = await Promise.all([request.formData()]);
  const returnUrl = formData.get("returnUrl");
  const originalPassword = formData.get("originalPassword");
  const password = formData.get("password");

  if (originalPassword === password) {
    try {
      session.set("maintainanceMode", "true");
      return redirect(returnUrl, {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  return { ok: false };
}

export async function loader({ request }: LoaderFunctionArgs) {
  const page = await SanityClient.fetch(PASSWORD_PAGE_QUERY);
  const session = await getSession(request.headers.get("Cookie"));
  const cookieMaintainance = await session.get("maintainanceMode");

  if (cookieMaintainance === "true" || page?.passwordEnabled === false) {
    return redirect("/");
  }

  if (!page) throw new Response(null, { status: 404 });

  return json({
    page,
  });
}

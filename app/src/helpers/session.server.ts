// app/session.ts
import { createCookieSessionStorage } from "@remix-run/node";
import "dotenv/config";

// Ensure you have a session secret defined in your environment variables
const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

// Define the session storage
const { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, // 1 week
  },
});


export { getSession, commitSession, destroySession };

import { createClient } from "@sanity/client";
import "dotenv/config";

export const SanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: true,
  apiVersion: new Date().toISOString().split("T")[0],
});

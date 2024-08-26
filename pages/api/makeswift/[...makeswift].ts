import { runtime } from "@/lib/makeswift/runtime";
import { MakeswiftApiHandler } from "@makeswift/runtime/next/server";
import { strict } from "assert";

strict(
  process.env.MAKESWIFT_SITE_API_KEY,
  "MAKESWIFT_SITE_API_KEY is required"
);

export default MakeswiftApiHandler(process.env.MAKESWIFT_SITE_API_KEY, {
  runtime,
  apiOrigin: process.env.MAKESWIFT_API_ORIGIN,
  appOrigin: process.env.MAKESWIFT_APP_ORIGIN,
});

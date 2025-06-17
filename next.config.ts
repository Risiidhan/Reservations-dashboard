import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";
import { isSentryEnabled } from "./src/utils";

const nextConfig: NextConfig = {
  /* config options here */
};

const sentryConfig = withSentryConfig(nextConfig, {
  org: process.env.NEXT_PUBLIC_SENTRY_ORG,
  project: process.env.NEXT_PUBLIC_SENTRY_PROJECT,
  disableLogger: true,
  tunnelRoute: "/monitoring",
  reactComponentAnnotation: {
    enabled: true,
  },
});

export default isSentryEnabled() ? sentryConfig : nextConfig;

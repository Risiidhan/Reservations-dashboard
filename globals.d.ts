export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SENTRY_DSN: string;
      NEXT_PUBLIC_SENTRY_ORG: string;
      NEXT_PUBLIC_SENTRY_PROJECT: string;
      NEXT_PUBLIC_SENTRY_ENABLED: string;
    }
  }
}

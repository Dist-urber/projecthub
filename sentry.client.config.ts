import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://a79c99682354da29da2fd57df301093c@o4509826255618048.ingest.de.sentry.io/4509826257715280",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],
});
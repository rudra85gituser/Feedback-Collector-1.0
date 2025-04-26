// Safe environment configuration that won't break builds
export const config = {
  mongodb: {
    uri: process.env.MONGODB_URI || "",
    isConfigured: !!process.env.MONGODB_URI,
  },
  environment: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
}

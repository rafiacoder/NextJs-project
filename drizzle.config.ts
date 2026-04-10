import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",   // path to your schema file
  out: "./drizzle",           // where migration files will be saved
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
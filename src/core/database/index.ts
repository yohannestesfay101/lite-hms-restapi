import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.databaseConnectionString,
});

export const db = drizzle(pool);

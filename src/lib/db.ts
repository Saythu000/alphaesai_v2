import { neon } from "@neondatabase/serverless";

const databaseUrl =
  process.env.DATABASE_URL ||
  "postgresql://neondb_owner:npg_lru8xjswPb5E@ep-bold-frog-axd3h73m-pooler.c-4.us-east-2.aws.neon.tech/neondb?sslmode=require";

export const sql = neon(databaseUrl);

// Helper to ensure cms_content table exists
export async function initCMSDatabase() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS cms_content (
        id VARCHAR(50) PRIMARY KEY,
        data JSONB NOT NULL,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    return { success: true };
  } catch (error) {
    console.error("Error initializing CMS database:", error);
    return { success: false, error: String(error) };
  }
}

// Fetch CMS Data from Database (or return null if not stored yet)
export async function getCMSDataFromDB() {
  try {
    const result = await sql`
      SELECT data FROM cms_content WHERE id = 'homepage_cms' LIMIT 1;
    `;
    if (result.length > 0) {
      return result[0].data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching CMS data from Neon DB:", error);
    return null;
  }
}

// Save CMS Data to Database
export async function saveCMSDataToDB(cmsData: unknown) {
  try {
    await initCMSDatabase();
    await sql`
      INSERT INTO cms_content (id, data, updated_at)
      VALUES ('homepage_cms', ${JSON.stringify(cmsData)}::jsonb, NOW())
      ON CONFLICT (id)
      DO UPDATE SET data = EXCLUDED.data, updated_at = NOW();
    `;
    return { success: true };
  } catch (error) {
    console.error("Error saving CMS data to Neon DB:", error);
    return { success: false, error: String(error) };
  }
}

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

// Password hashing helper
import crypto from "crypto";

export function hashPassword(password: string): string {
  return crypto.pbkdf2Sync(password, "alphaes_admin_salt_2026", 1000, 64, "sha512").toString("hex");
}

// Helper to ensure admin_users table exists and has initial admin user
export async function initAdminUsersDatabase() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        email VARCHAR(255),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Check if any admin exists
    const users = await sql`SELECT id FROM admin_users LIMIT 1;`;
    if (users.length === 0) {
      const defaultHash = hashPassword("alphaes2026");
      await sql`
        INSERT INTO admin_users (username, password_hash, email)
        VALUES ('admin', ${defaultHash}, 'admin@alphaesai.com');
      `;
    }
    return { success: true };
  } catch (error) {
    console.error("Error initializing admin_users database:", error);
    return { success: false, error: String(error) };
  }
}

// Verify admin user login credentials from Neon DB
export async function verifyAdminUser(usernameInput: string, passwordInput: string) {
  try {
    await initAdminUsersDatabase();
    const cleanUsername = usernameInput.trim().toLowerCase();
    const result = await sql`
      SELECT id, username, password_hash, email FROM admin_users 
      WHERE LOWER(username) = ${cleanUsername} OR LOWER(email) = ${cleanUsername}
      LIMIT 1;
    `;

    if (result.length === 0) {
      return { success: false, error: "Invalid username or email." };
    }

    const user = result[0];
    const inputHash = hashPassword(passwordInput);

    // Verify hash or plain match fallback
    if (user.password_hash === inputHash || user.password_hash === passwordInput) {
      return {
        success: true,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      };
    }

    return { success: false, error: "Invalid password." };
  } catch (error) {
    console.error("Error verifying admin credentials in Neon DB:", error);
    return { success: false, error: "Database authentication error." };
  }
}

// Update admin credentials in Neon DB
export async function updateAdminCredentials(usernameInput: string, newPasswordInput: string) {
  try {
    await initAdminUsersDatabase();
    const newHash = hashPassword(newPasswordInput);
    const cleanUsername = usernameInput.trim();

    const existing = await sql`SELECT id FROM admin_users LIMIT 1;`;
    if (existing.length === 0) {
      await sql`
        INSERT INTO admin_users (username, password_hash, email)
        VALUES (${cleanUsername}, ${newHash}, 'admin@alphaesai.com');
      `;
    } else {
      const adminId = existing[0].id;
      await sql`
        UPDATE admin_users 
        SET username = ${cleanUsername}, password_hash = ${newHash}, updated_at = NOW()
        WHERE id = ${adminId};
      `;
    }
    return { success: true };
  } catch (error) {
    console.error("Error updating admin credentials in Neon DB:", error);
    return { success: false, error: String(error) };
  }
}

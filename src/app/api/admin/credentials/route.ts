import { NextResponse } from "next/server";
import { updateAdminCredentials } from "@/lib/db";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session")?.value;

    if (session !== "authenticated" && process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Admin login session is required." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "Username and new password are required." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, error: "Password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    const result = await updateAdminCredentials(username, password);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to update admin credentials." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Admin login credentials updated successfully in Neon Database.",
    });
  } catch (error) {
    console.error("Error updating admin credentials:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error updating admin credentials." },
      { status: 500 }
    );
  }
}

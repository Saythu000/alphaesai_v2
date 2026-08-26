import { NextResponse } from "next/server";
import { verifyAdminUser } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "Username and password are required." },
        { status: 400 }
      );
    }

    const result = await verifyAdminUser(username, password);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Authentication failed." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: result.user,
      message: "Authenticated successfully against Neon Database.",
    });
  } catch (error) {
    console.error("Error in admin login API route:", error);
    return NextResponse.json(
      { success: false, error: "Server error authenticating admin." },
      { status: 500 }
    );
  }
}

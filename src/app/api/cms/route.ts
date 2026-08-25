import { NextResponse } from "next/server";
import { getCMSDataFromDB, saveCMSDataToDB } from "@/lib/db";
import { DEFAULT_CMS_DATA, sanitizeCMSData } from "@/lib/cms-store";

export async function GET() {
  try {
    const dbData = await getCMSDataFromDB();
    if (dbData) {
      const sanitized = sanitizeCMSData(dbData);
      return NextResponse.json({ success: true, data: sanitized });
    }
    return NextResponse.json({ success: true, data: DEFAULT_CMS_DATA });
  } catch (error) {
    console.error("GET /api/cms error:", error);
    return NextResponse.json(
      { success: false, data: DEFAULT_CMS_DATA, error: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid CMS data payload" },
        { status: 400 }
      );
    }

    const result = await saveCMSDataToDB(body);
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "CMS data saved to Neon PostgreSQL successfully",
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("POST /api/cms error:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

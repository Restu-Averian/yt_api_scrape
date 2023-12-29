import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { message: `Error : ${e?.message}` },
      { status: 500 }
    );
  }
}

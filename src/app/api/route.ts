import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { ResultType, youtube } from "scrape-youtube";

export async function GET(req: NextApiRequest) {
  try {
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { message: `Error : ${e?.message}` },
      { status: 500 }
    );
  }
}

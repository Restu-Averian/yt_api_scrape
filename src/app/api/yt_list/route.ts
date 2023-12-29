import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { ResultType, youtube } from "scrape-youtube";

export async function GET(req: NextApiRequest) {
  if (req.url) {
    const url = new URL(req?.url);

    const videoParam: string | null =
      url?.searchParams?.get("search_query") || "windah";

    const typeSearch: ResultType | string | null =
      url?.searchParams?.get("type") || "any";

    const lang: ResultType | string | null =
      url?.searchParams?.get("lang") || "en";

    try {
      const result = await youtube.search(videoParam, {
        type: typeSearch,
        request: {
          headers: {
            Cookie: "PREF=f2=8000000",
            "Accept-Language": lang,
          },
        },
      });
      return NextResponse.json(result, { status: 200 });
    } catch (e: any) {
      return NextResponse.json(
        { message: `Error : ${e?.message}` },
        { status: 500 }
      );
    }
  }
}

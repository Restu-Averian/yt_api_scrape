import { NextResponse } from "next/server";
import ytdl from "ytdl-core";

export async function GET(req: Request) {
  if (req?.url) {
    const url = new URL(req?.url);
    const searchParam = new URLSearchParams(url.searchParams);

    const videoId: string | null = searchParam.get("id") || "";

    const info = await ytdl.getInfo(videoId);
    return NextResponse.json(
      {
        detail: info?.videoDetails,
        related_videos: info?.related_videos,
        formats: info?.formats,
      },
      { status: 200 }
    );
  }
}

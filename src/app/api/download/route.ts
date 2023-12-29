import { createWriteStream, readFileSync } from "fs";
import { NextResponse } from "next/server";
import ytdl from "ytdl-core";

export async function GET(req: Request) {
  if (req?.url) {
    const url = new URL(req?.url);
    const searchParam = new URLSearchParams(url.searchParams);

    const videoId: string | null = searchParam.get("id") || "";

    const info = await ytdl.getInfo(videoId);

    // const outputFilePath = `${info.videoDetails.title}.mp4`;
    const outputFilePath = `video.mp4`;
    const outputStream = createWriteStream(outputFilePath);
    ytdl.downloadFromInfo(info).pipe(outputStream);

    const fileBuffer = readFileSync("video.mp4");

    outputStream
      .on("finish", () => {
        console.log(`Finished downloading: ${outputFilePath}`);
      })
      ?.on("error", (err: Error) => {
        console.log(`Error downloading: ${err.message}`);
      });

    return NextResponse.json(fileBuffer, { status: 200 });
  }
}

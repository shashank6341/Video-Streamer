const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + index.html);
});

app.get("/media", (req, res, next) => {
  // Part of video to return
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Range Header Required");
  }

  const videoPath = "sample_video.mp4";
  const videoSize = fs.statSync("sample_video.mp4").size;

  const CHUNK_SIZE = 10 ** 6;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});

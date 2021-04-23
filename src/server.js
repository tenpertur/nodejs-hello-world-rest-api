import express from "express";
export const server = express();

export const welcomeRoute = (req, res) => {
  res.send("Hello, world");
};

server.get("/", welcomeRoute);

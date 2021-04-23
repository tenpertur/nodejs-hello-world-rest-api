import express, { response } from "express";
import { welcomeRoute } from "./server";
import request from "supertest";

const app = express();
app.use("/", welcomeRoute);

describe("testing-server", () => {
  it("GET /- success", async () => {
    const response = await request(app).get("/"); //uses the request function that calls on express app instance
    expect(response.text).toEqual("Hello, world");
  });
});

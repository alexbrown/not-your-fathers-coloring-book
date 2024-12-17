require("dotenv").config();
const { env } = require("node:process");
const express = require("express");
const path = require("path");
const Cloudflare = require("./cloudflare");
const Controller = require("./controller");

const app = express();

app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.get("/", Controller.view);

app.post("/api/generate", Controller.generateImage);

app.listen(4000, () => console.info("Server running on port 4000 🚀"));

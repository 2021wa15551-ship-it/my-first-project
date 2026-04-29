const express = require("express");
const os = require("os");

const app = express();

// Version (you can change this for each build)
const VERSION = "v1";

app.get("/", (req, res) => {
  res.json({
    message: "CI/CD working 🚀",
    version: VERSION,
    hostname: os.hostname(),
    timestamp: new Date().toISOString()
  });
});

// Health check (used by K8 readiness/liveness)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, "0.0.0.0", () => {
  console.log(`Running version ${VERSION}`);
});
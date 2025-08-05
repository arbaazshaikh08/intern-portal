import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: "https://intern-portal-crkd.vercel.app/",
    methods: "GET",
  })
);
app.use(express.json());

import { getInternData } from "./intern.controller.js";

app.get("/api/intern", getInternData);

app.get("/", (req, res) => {
  res.send("Server is live ✅");
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});

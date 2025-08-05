import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

const allowedOrigins = [
  "https://intern-portal-q9xi.vercel.app",
  "https://intern-portal-q9xi-gn6vz0fi7-arbaazshaikh08s-projects.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

import { getInternData } from "./intern.controller.js";

app.get("/api/intern", getInternData);


app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
 
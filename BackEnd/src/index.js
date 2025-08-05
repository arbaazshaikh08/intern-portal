import express from "express";
import cors from "cors";

 
const app = express();  
const PORT = 8000;

app.use(cors());
app.use(express.json());

import { getInternData } from "./intern.controller.js";

app.get("/", getInternData);

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});

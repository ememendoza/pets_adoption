import express from "express";
import adoptionRoutes from "./routes/adoption.route.js";
import certifiedRoutes from "./routes/certified.route.js";

const app = express();

app.set("port", 4000);

app.use(express.json());

app.use("/api/adoption", adoptionRoutes);
app.use("/api/certified", certifiedRoutes);

export default app;

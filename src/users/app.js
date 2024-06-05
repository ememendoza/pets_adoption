import express from "express";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import locationRoutes from "./routes/location.route.js";

const app = express();

app.set("port", 4000);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/location", locationRoutes);

export default app;

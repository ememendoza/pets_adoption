import express from "express";

const app = express();

app.set("port", 4000);

app.set(express.json());

app.use("/api/adoption");
app.use("/api/certified");

export default app;

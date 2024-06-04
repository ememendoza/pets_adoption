import express from "express";
import petRoutes from "./routes/pet.route.js";
import pictureRoutes from "./routes/picture.route.js";
import medicalDataRoutes from "./routes/medical_data.route.js";
import fileUpload from "express-fileupload";

const app = express();

app.use(
  fileUpload({
    useTempFiles: true,
    temFileDir: "./uploads",
  })
);

app.use(express.static("images"));

app.set("port", 4000);

app.use(express.json());

app.use("/api/pets", petRoutes);
app.use("/api/pictures", pictureRoutes);
app.use("/api/medicalData", medicalDataRoutes);

export default app;

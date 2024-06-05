import petRoutes from "./routes/pet.route.js";
import pictureRoutes from "./routes/picture.route.js";
import medicalDataRoutes from "./routes/medical_data.route.js";
import fileUpload from "express-fileupload";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import express from "express";

const app = express();

const swaggerDocument = YAML.load("./swagger.yaml");

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

app.use(express.static("images"));

app.set("port", 4000);

app.use(express.json());

app.use("/api/pets", petRoutes);
app.use("/api/pictures", pictureRoutes);
app.use("/api/medicalData", medicalDataRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;

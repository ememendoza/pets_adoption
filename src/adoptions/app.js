import express from "express";
import adoptionRoutes from "./routes/adoption.route.js";
import certifiedRoutes from "./routes/certified.route.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import authMiddleware from './middlewares/auth.js';

const app = express();

const swaggerDocument = YAML.load("./swagger.yaml");

app.set("port", 5000);

app.use(express.json());

app.use("/api", authMiddleware);
app.use("/api/adoption", adoptionRoutes);
app.use("/api/certified", certifiedRoutes);
app.use("/swagger/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;

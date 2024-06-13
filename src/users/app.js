import express from "express";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import locationRoutes from "./routes/location.route.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import authMiddleware from './middlewares/auth.js';


const app = express();

const swaggerDocument = YAML.load("./swagger.yaml");

app.set("port", 4000);

app.use(express.json());

app.use("/api", authMiddleware)
app.use("/token/auth", authRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/location", locationRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;

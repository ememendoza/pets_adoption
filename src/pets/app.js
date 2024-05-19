import express from 'express';
import petRoutes from './routes/pet.route.js';

const app = express();

app.set('port', 4000);

app.use(express.json());

app.use('/api/pets', petRoutes);

export default app;

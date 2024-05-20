import express from 'express';
import petRoutes from './routes/pet.route.js';
import pictureRoutes from './routes/picture.route.js';
import fileUpload from 'express-fileupload'

const app = express();

app.use(fileUpload({
    useTempFiles: true,
    temFileDir: './uploads'
}))

app.use(express.static('images'));

app.set('port', 7000);

app.use(express.json());

app.use('/api/pets', petRoutes);
app.use('/api/pictures', pictureRoutes);

export default app;

import getConnection from '../database/database.js';
import Picture from '../models/picture.js';

const getPicture = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM picture");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const postPicture = async (req, res) => {
    try {
        const { Id, Path, CreateDate} = req.body;
        console.log(Id, Path, CreateDate);
        const picture = new Picture(Id, Path, CreateDate);
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO picture SET ?", picture);
        res.json(result);
    
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getPicture,
    postPicture,
};
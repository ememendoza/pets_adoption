import getConnection from "../database/database.js";
import Pet from "../models/pet.js";

const getPet = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM pet");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postPets = async (req, res) => {
  try {
    const { Id, Name, Birthdate } = req.body;

    const pet = new Pet(Id, Name, Birthdate);
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO pet SET ?", pet);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getPet,
  postPets,
};

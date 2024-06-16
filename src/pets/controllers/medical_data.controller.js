import getConnection from "../database/database.js";
import MedicalData from "../models/medical_data.js";

const get = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM medical_data");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const find = async (req, res) => {
  try {
    const id = req.params.id;

    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM medical_data WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  get,
  find,
};

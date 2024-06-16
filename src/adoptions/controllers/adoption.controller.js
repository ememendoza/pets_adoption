import getConnection from "../database/database.js";
import Adoption from "../models/adoption.js";

const get = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM adoption");
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const find = async (req, res) => {
  try {
    const id = req.params.id;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM adoption WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const post = async (req, res) => {
  try {
    const {
      adoptionDate,
      adoptionType,
      adoptionDuration,
      adoptionConditions,
      pet_id,
      user_id,
    } = req.body;

    const adoption = new Adoption(
      adoptionDate,
      adoptionType,
      adoptionDuration,
      adoptionConditions,
      pet_id,
      user_id
    );
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO adoption SET ?",
      adoption
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const methods = {
  get,
  post,
  find,
};

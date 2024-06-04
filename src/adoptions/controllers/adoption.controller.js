import getConnection from "../database/database.js";
import Adoption from "../models/adoption.js";

const getAdoption = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM adoption");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postAdoption = async (req, res) => {
  try {
    const { adoptionDate, adoptionType, adoptionDuration, adoptionConditions } =
      req.body;
    const adoption = new Adoption(
      adoptionDate,
      adoptionType,
      adoptionDuration,
      adoptionConditions
    );
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO adoption SET ?",
      adoption
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const methods = {
  getAdoption,
  postAdoption,
};

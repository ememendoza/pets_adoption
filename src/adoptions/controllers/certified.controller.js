import getConnection from "../database/database.js";
import Certified from "../models/certified.js";

const getCertified = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM certified");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postCertified = async (req, res) => {
  try {
    const { adoptionAgreement, adoptionContract, inmunizationAndHealth } =
      req.body;
    const certified = new Certified(
      adoptionAgreement,
      adoptionContract,
      inmunizationAndHealth
    );
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO certified SET ?",
      certified
    );
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getCertified,
  postCertified,
};

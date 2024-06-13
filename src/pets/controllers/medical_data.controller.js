import getConnection from "../database/database.js";
import MedicalData from "../models/medical_data.js";

const getMedicalData = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM medical_data");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postMedicalData = async (req, res) => {
  try {
    const { vacines, sterilization, hospitalization } = req.body;

    const medicalData = new MedicalData(
      vacines,
      sterilization,
      hospitalization
    );
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO medical_data SET ?",
      medicalData
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getMedicalData,
  postMedicalData,
};

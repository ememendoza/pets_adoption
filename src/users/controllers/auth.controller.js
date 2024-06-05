import getConnection from "../database/database.js";
import Auth from "../models/auth.js";

const getAuth = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = connection.query("SELECT * FROM auth");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postAuth = async (req, res) => {
  try {
    const { username, password, safetyQuestion } = req.body;
    const auth = new Auth(username, password, safetyQuestion);
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO auth SET ?", auth);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getAuth,
  postAuth,
};

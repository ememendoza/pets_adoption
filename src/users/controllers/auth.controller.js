import getConnection from "../database/database.js";
import Auth from "../models/auth.js";
import jwt from "jsonwebtoken";

const getAuth = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM auth");
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

const getByData = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = { username, password };

    const connection = await getConnection();
    const result = await connection.query(`SELECT * FROM auth WHERE username =? AND password =?`, [username, password]);

    const token = jwt.sign(user, process.env.SECRET_KEY, {
      expiresIn: '1h'
    });

    if (result.length != 0) {
      res.json({ token });
    } else {
      res.json({ token });
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const methods = {
  getAuth,
  postAuth,
  getByData
};

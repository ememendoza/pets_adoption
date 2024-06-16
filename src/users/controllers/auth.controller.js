import getConnection from "../database/database.js";
import Auth from "../models/auth.js";
import jwt from "jsonwebtoken";

const get = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = { username, password };

    const connection = await getConnection();
    const result = await connection.query(
      `SELECT * FROM auth WHERE username =? AND password =?`,
      [username, password]
    );

    const token = jwt.sign(user, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  get,
};

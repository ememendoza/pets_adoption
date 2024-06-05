import getConnection from "../database/database.js";
import User from "../models/user.js";

const getUser = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM user");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phone,
      birthDate,
      gender,
      maritalStatus,
      housingType,
      childrenPresent,
      petsPresent,
      availableHours,
    } = req.body;
    const user = new User(
      firstName,
      lastName,
      phone,
      birthDate,
      gender,
      maritalStatus,
      housingType,
      childrenPresent,
      petsPresent,
      availableHours
    );
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO user SET ?", user);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getUser,
  postUser,
};

import getConnection from "../database/database.js";
import User from "../models/user.js";
import Auth from "../models/auth.js";
import Location from "../models/location.js";

const insertAuth = async (auth, connection) => {
  const result = (await connection).query("INSERT INTO auth SET ?", auth);
  return result;
};

const insertLocation = async (location, connection) => {
  const result = (await connection).query(
    "INSERT INTO location SET ?",
    location
  );
  return result;
};

const post = async (req, res) => {
  try {
    const connection = getConnection();

    const {
      id,
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
      country,
      city,
      zone,
      address,
      neighborhood,
      username,
      password,
      role,
    } = req.body;
    const auth_id = id;
    const location_id = id;

    const auth = new Auth(id, username, password, role);
    const location = new Location(
      id,
      country,
      city,
      zone,
      address,
      neighborhood
    );
    const user = new User(
      id,
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
      auth_id,
      location_id
    );

    const authResult = await insertAuth(auth, connection);
    const locationResult = await insertLocation(location, connection);
    const userResult = (await connection).query("INSERT INTO user SET ?", user);

    res.json({
      auth: authResult,
      location: locationResult,
      user: userResult,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const get = async (req, res) => {
  try {
    const id = req.params.id;
    const connection = await getConnection();
    const result = await connection.query(
      `SELECT * FROM user WHERE id = ${id}`
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const methods = {
  get,
  post,
};

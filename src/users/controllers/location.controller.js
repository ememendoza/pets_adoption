import getConnection from "../database/database.js";
import Location from "../models/location.js";

const getLocation = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM location");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postLocation = async (req, res) => {
  try {
    const { country, city, zone, address, neighborhood } = req.body;
    const location = new Location(country, city, zone, address, neighborhood);
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO location SET ?",
      location
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getLocation,
  postLocation,
};

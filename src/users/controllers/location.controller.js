import getConnection from "../database/database.js";

const get = async (req, res) => {
  try {
    const connection = await getConnection();
    const id = req.params.id;
    const result = await connection.query(
      "SELECT * FROM location WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const methods = {
  get,
};

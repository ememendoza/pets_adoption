import getConnection from "../database/database.js";
import Picture from "../models/picture.js";
import {
  uploadFile,
  getFiles,
  getFile,
  downloadFile,
  getFileURL,
} from "../config/s3.js";

const get = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM picture");
    const s3Result = await getFiles();
    res.json({
      s3: s3Result,
      picture: result,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const find = async (req, res) => {
  try {
    const fileName = req.params.fileName;

    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM picture WHERE name = ?",
      fileName
    );
    const s3Result = await getFileURL(fileName);
    res.json({
      s3: s3Result,
      picture: result,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const download = async (req, res) => {
  await downloadFile(req.params.fileName);
  res.json({ message: "archivo descargado" });
};

export const methods = {
  get,
  find,
  download,
};

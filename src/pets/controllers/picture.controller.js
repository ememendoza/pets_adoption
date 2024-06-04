import getConnection from "../database/database.js";
import Picture from "../models/picture.js";
import {
  uploadFile,
  getFiles,
  getFile,
  downloadFile,
  getFileURL,
} from "../config/s3.js";

const getPicture = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM picture");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postPicture = async (req, res) => {
  try {
    const { name, size } = req.body;
    const picture = new Picture(name, size);
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO picture SET ?", picture);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postBucketPicture = async (req, res) => {
  console.log(req.files.file);
  const { name, size } = req.files.file;
  const picture = new Picture(name, size);
  const connection = await getConnection();
  const dbResult = await connection.query("INSERT INTO picture SET ?", picture);

  const result = await uploadFile(req.files.file);
  res.json({ result });
};

const getBucketPicture = async (req, res) => {
  const result = await getFiles();
  res.json(result.Contents);
};

const findBucketPicture = async (req, res) => {
  const result = await getFileURL(req.params.fileName);
  res.json({
    url: result,
  });
};

const downloadBucketPicture = async (req, res) => {
  await downloadFile(req.params.fileName);
  res.json({ message: "archivo descargado" });
};

export const methods = {
  getPicture,
  postPicture,
  postBucketPicture,
  getBucketPicture,
  findBucketPicture,
  downloadBucketPicture,
};

import getConnection from "../database/database.js";
import Pet from "../models/pet.js";
import Picture from "../models/picture.js";
import MedicalData from "../models/medical_data.js";
import {
  uploadFile,
  getFiles,
  getFile,
  downloadFile,
  getFileURL,
} from "../config/s3.js";
import { json } from "express";

const find = async (req, res) => {
  try {
    const id = req.params.id;

    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM pet WHERE id = ?", id);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const get = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM pet");
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const insertPicture = async (picture, connection) => {
  const s3Result = await uploadFile(req.files.file);
  const result = await connection.query("INSERT INTO picture SET ?", picture);
  return json({
    s3: s3Result,
    db: result,
  });
};

const insertMedicalData = async (medicalData, connection) => {
  const result = await connection.query(
    "INSERT INTO medicalData SET ?",
    medicalData
  );
  return result;
};

const post = async (req, res) => {
  try {
    const connection = getConnection();

    const {
      id,
      name,
      birthDate,
      type,
      gender,
      size,
      color,
      story,
      specialSkills,
      energyLevel,
      compatibility,
      status,
      pictureName,
      pictureSize,
      vacines,
      sterilization,
      hospitalization,
    } = req.body;

    const { picture_id, medical_data_id } = id;
    const picture = new Picture(id, pictureName, pictureSize);
    const medicalData = new MedicalData(
      id,
      vacines,
      sterilization,
      hospitalization
    );
    const pet = new Pet(
      id,
      name,
      birthDate,
      type,
      gender,
      size,
      color,
      story,
      specialSkills,
      energyLevel,
      compatibility,
      status,
      picture_id,
      medical_data_id
    );

    await connection.beginTransaction();

    const resultPicture = insertPicture(picture, connection);
    const resultMedicalData = insertMedicalData(medicalData, connection);
    const resultPet = (await connection).query("INSERT INTO pet SET ?", pet);

    await connection.commit();

    res.json({
      picture: resultPicture,
      medicalData: resultMedicalData,
      pet: resultPet,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const methods = {
  get,
  post,
  find,
};

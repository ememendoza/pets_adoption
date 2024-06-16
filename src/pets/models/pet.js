import Picture from "./picture.js";

class Pet {
  constructor(
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
  ) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.type = type;
    this.gender = gender;
    this.size = size;
    this.color = color;
    this.story = story;
    this.specialSkills = specialSkills;
    this.energyLevel = energyLevel;
    this.compatibility = compatibility;
    this.status = status;
    this.picture_id = picture_id;
    this.medical_data_id = medical_data_id;
  }
}

export default Pet;

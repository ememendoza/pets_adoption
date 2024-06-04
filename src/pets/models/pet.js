import Picture from "./picture.js";

class Pet {
  constructor(
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
    status
  ) {
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
  }
}

export default Pet;

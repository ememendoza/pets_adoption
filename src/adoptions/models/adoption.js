class Adoption {
  constructor(
    adoptionDate,
    adoptionType,
    adoptionDuration,
    adoptionConditions,
    pet_id,
    user_id
  ) {
    this.adoptionDate = adoptionDate;
    this.adoptionType = adoptionType;
    this.adoptionDuration = adoptionDuration;
    this.adoptionConditions = adoptionConditions;
    this.pet_id = pet_id;
    this.user_id = user_id;
  }
}

export default Adoption;

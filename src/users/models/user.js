class User {
  constructor(
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
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.birthDate = birthDate;
    this.gender = gender;
    this.maritalStatus = maritalStatus;
    this.housingType = housingType;
    this.childrenPresent = childrenPresent;
    this.petsPresent = petsPresent;
    this.availableHours = availableHours;
    this.auth_id = auth_id;
    this.location_id = location_id;
  }
}

export default User;

class User {
  constructor(
    firstName,
    lastName,
    phone,
    birthDate,
    gender,
    maritalStatus,
    housingType,
    childrenPresent,
    petsPresent,
    availableHours
  ) {
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
  }
}

export default User;

{
  type BloodGroup = "B+" | "A+" | "O+" | "AB+" | "B-" | "A-" | "O-" | "AB-";

  type StudyGroups = {
    science: string;
    arts: string;
    commerce: string;
  };
  type Student = {
    name: string;
    roll: number;
    bloodType: BloodGroup;
    group: keyof StudyGroups;
  };
  let students: Student = {
    name: "a",
    roll: 10,
    bloodType: "AB+",
    group: "science",
  };
}
{
  const getValueOf = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const student = {
    name: "asha",
    roll: 1,
  };
  const v = getValueOf(student, "roll");
}

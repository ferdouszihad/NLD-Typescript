{
  type List<T> = T[];

  // gerneric Type can take type as parameter
  const colors: List<string> = ["red", "green", "yellow"];
  const saleries: List<number> = [80000, 34000, 3000];
  const userActiveList: List<boolean> = [true, true, false, true];
  type BloodGroup = "B+" | "A+" | "O+" | "AB+" | "B-" | "A-" | "O-" | "AB-";

  type Student = {
    name: string;
    roll: number;
    blood?: BloodGroup;
  };

  const students: List<Student> = [
    {
      name: "asha",
      roll: 1,
    },
    {
      name: "rasha",
      roll: 2,
      blood: "B+",
    },
    {
      name: "nasha",
      roll: 3,
    },
  ];
}
{
  // Generic Tuple
  type Tuple<T1, T2> = [T1, T2];

  type Student = {
    name: string;
    roll: number;
    blood?: BloodGroup;
  };
  type BloodGroup = "B+" | "A+" | "O+" | "AB+" | "B-" | "A-" | "O-" | "AB-";

  const couple: Tuple<string, string> = ["Zihad", "Emu"];
  const newUser: Tuple<number, Student> = [1110, { name: "zihad", roll: 1110 }];
  
}

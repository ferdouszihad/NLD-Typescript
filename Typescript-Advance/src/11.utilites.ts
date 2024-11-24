{
  type User = {
    id: number; // A string with exactly 16 characters
    firstName: string;
    lastName: string;
    email?: string;
    password: string;
    age?: number;
    phoneNumber?: string;
    isAdmin?: boolean;
    isManager?: boolean;
  };

  //pick
  type AdminChar = {
    id: number; // A string with exactly 16 characters
    firstName: string;
    lastName: string;
    email?: string;
    phoneNumber?: string;
  };
  type Admin = Pick<User, keyof AdminChar>;

  //omit
  type normalUser = Omit<User, keyof AdminChar>;
  //required
  type signedInUser = Required<User>;
  //partial
  type tester = Partial<User>;
  //readonly
  type LockedUser = Readonly<User>;
  //record
  type Obj = Record<string, unknown>;
  const newFeature: Obj = {
    name: "string",
    a: "num",
    b: "ss",
  };
}

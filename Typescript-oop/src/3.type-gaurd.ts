{
  //type guards
  //type guard using typeof

  type AlphaNum = string | number;

  const add = (v1: AlphaNum, v2: AlphaNum): AlphaNum => {
    return typeof v1 == "number" && typeof v2 == "number"
      ? v1 + v2
      : v1.toString() + v2.toString();
  };

  console.log(add(12, 0));
}

{
  // ingaurd
  // It can use for object and property baseed checking
  type NormalUser = {
    name: string;
  };
  type LoggedUser = {
    name: string;
    role: string;
  };

  const getUser = (user: NormalUser | LoggedUser): string => {
    return "role" in user
      ? `Welcome ${user.role} ${user.name}`
      : `welcome ${user.name} please be a subscriber`;
  };

  const u1: NormalUser = {
    name: "emu",
  };
  const u2: LoggedUser = {
    name: "zihad",
    role: "moderator",
  };
  console.log(getUser(u1));
  console.log(getUser(u2));
}


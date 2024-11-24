{
  //conditional type

  type a = string;
  type b = undefined;

  type x = a extends null ? true : false;
  type y = a extends null ? true : b extends undefined | null ? string : null;
  //real example
  type PowerOfAdmin = {
    userCreate: true;
    userDelete: true;
  };

  type isAdmin<T> = T extends keyof PowerOfAdmin ? true : false;

  type admin = isAdmin<"sendMessage">;
}

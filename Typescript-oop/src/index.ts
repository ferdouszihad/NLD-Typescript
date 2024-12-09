console.log("Welcome to OOPS-2");
//playground
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

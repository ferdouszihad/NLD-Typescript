{
  //   type List<T> = Array<T>;

  //   const number: List<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //   const stringNumber: List<string> = number.map((num) => num.toString());
  //   console.log(stringNumber);

  type Area = {
    width: number;
    height: number;
  };
  type surfaceWidth = Area["width"];

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area: AreaString<{ width: string; height: number }> = {
    width: "200",
    height: 300,
  };
}

{
  type IsAdmin = boolean;
  type Colors = string[];
  type vehicle1 = {
    name: string;
    type: string;
    value: number;
    engineType?: string;
    isLicensed: boolean;
    color: Colors;
  };

  type Car = vehicle1 & {
    wheelCount: 4;
    seatCount: number;
    model: "string";
  };

  interface Vehicle2 {
    name: string;
    type: string;
    value: number;
    engineType?: string;
    isLicensed: boolean;
    color: Colors;
  }

  type truck = Vehicle2 & {};
  interface cycle extends Vehicle2 {}
  //declaring array with interface
  interface salaries {
    [index: number]: number;
  }

  //declarring function with type
  type Add = (a: number, b: number) => number;

  // declarring function with interface
  interface AddInt {
    (a: number, b: number): number;
  }
}
// - we can use interface with type
// - we can use type with type

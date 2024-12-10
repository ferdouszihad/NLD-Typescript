{
  //polymorphism

  class person {
    getSleep(): void {
      console.log("I am sleeping for 8 Hours per day.");
    }
  }
  class student extends person {
    getSleep(): void {
      console.log("I am sleeping for 7 Hours per day.");
    }
  }

  class developer extends person {
    getSleep(): void {
      console.log("I am sleeping for 5 Hours per day.");
    }
  }

  const getSleepHour = (param: person): void => {
    param.getSleep();
  };

  const person1 = new person();
  const person2 = new student();
  const person3 = new developer();

  person1.getSleep();
  person2.getSleep();
  person3.getSleep();
}

{
  class shape {
    area(): number {
      return 0;
    }
  }

  class circle extends shape {
    constructor(public radius: number) {
      super();
    }
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class rectangle extends shape {
    constructor(public width: number, public height: number) {
      super();
    }
    area(): number {
      return this.width * this.height;
    }
  }
  const getArea = (sh: shape) => {
    console.log(sh.area());
  };

  const area1 = new shape();
  const area2 = new circle(10);
  const area3 = new rectangle(5, 8);
  getArea(area1);
  getArea(area2);
  getArea(area3);
}
// JS DOnt Support this type of Polymorphism
// {
//   class calculator {
//     sum(n1: number, n2: number) {
//       return n1 + n2;
//     }
//     sum(n2: number) {
//       return n1 + n2;
//     }
//   }
// }

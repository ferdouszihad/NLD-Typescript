console.log("Welcome to OOPS");
{
  //basic declaration of class
  class Student {
    public name: string;
    public id: number;
    public class_no: number;

    constructor(name: string, id: number, class_no: number) {
      this.name = name;
      this.id = id;
      this.class_no = class_no;
      this.introduce();
    }

    introduce(): void {
      const str: string = `Hello. I am ${this.name} . I read in class ${this.class_no}`;
      console.log(str);
    }
  }

  //   const studetn1 = new Student("emu", 10, 9);
  //   const studetn2 = new Student("Zihad", 11, 10);
}
{
  //Modern Declaration . We will use it
  class Student {
    constructor(
      public name: string,
      public id: number,
      public class_no: number
    ) {
      this.introduce();
    }

    introduce(): void {
      const str: string = `Hello. I am ${this.name} . I read in class ${this.class_no}`;
      console.log(str);
    }
  }

  const studetn1 = new Student("emu", 10, 9);
  const studetn2 = new Student("Zihad", 11, 10);
}

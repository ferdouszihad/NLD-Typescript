const output = (str: string) => {
  console.log(str);
};
{
  //1 Objective: Write a TypeScript program that outputs a welcome message.
  output("Task-1--------------");
  console.log(
    "Hello World, I will complete this course successfully and become a Next level Web Developer!"
  );
  output("end-----------------\n");
}
{
  // Task 2: Functions, Optional, and Literal Types
  // Objective: Create a function with parameters and an optional literal type.
  output("Task-2--------------");
  type Role = "admin" | "user" | "guest";
  const printAll = (name: string, age: number, role: Role) => {
    console.log({ name, role, age });
  };
  printAll("emu", 27, "admin");
  output("end-----------------\n");
}
//task-3
{
  //Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
  output("task-3 start----------------");
  type Person = {
    Name: string;
    Address: string;
    hairEyeColor: [string, string];
    moneyPlan: {
      income: number;
      expense: number;
    };
    hobbies: Array<string>;
    familyMembers: Array<string>;
    job: string;
    skills: Array<string>;
    isMarried: boolean;
    friends: Array<string>;
  };

  const person: Person = {
    Name: "zihad",
    Address: "pushpokunjo,Laxmipur",
    familyMembers: ["pushpo", "jewel", "joly", "poly", "lokman", "emu"],
    friends: ["Anas", "Manna", "Zishan", "Lingcon"],
    hairEyeColor: ["black", "black"],
    hobbies: ["music", "content-creation"],
    isMarried: true,
    job: "Senior Web Instructor",
    moneyPlan: {
      income: 29000,
      expense: 29000,
    },
    skills: ["web dev", "wordpress", "problem solving", "software design"],
  };
  console.log(person);
  output("task-3 end-------------");
}
{
  //Task 4: Union and Intersection Types
  // Objective: Create union and intersection types using interfaces.
  // Instructions:
  // Define interfaces Book and Magazine.
  // Create:
  // A type that is a union of Book and Magazine.
  // A type that is an intersection of Book and Magazine.

  interface Book {
    name: string;
    pageCount: number;
    author: string;
  }
  interface Magazine {
    name: string;
    publishTime: "yearly" | "monthly" | "weekly";
    pageCount: number;
  }

  type BookZin = Book | Magazine;

  const rm1: BookZin = {
    name: "Probondho Book",
    pageCount: 234,
    author: "dd",
  };
  //. TypeScript doesn't strictly enforce that an object must match only one of the union's members; instead, it checks if the object could match at least one of them.

  type ReadingThing = Book & Magazine;

  const rt1: ReadingThing = {
    name: "Top Blog",
    pageCount: 234,
    author: "Many",
    publishTime: "monthly",
  };
  console.log(rt1);
}
{
  //     Task 5: Function Type
  // Objective: Write a function that reverses a string.
  // Instructions:
  // Write a function reverseString that:
  // Takes a single string argument.
  // Returns the string in reverse order.
  // Example:
  // Input: "hello"
  // Output: "olleh"

  type StringFunc = (str: string) => string;

  const reverse: StringFunc = (str) => {
    return str.split("").reverse().join("");
  };
  console.log(reverse("hello"));
}
{
  //     Task 6: Spread and Rest Operators, Destructuring
  // Objective: Write a function that uses the rest operator for variable-length arguments.
  // Instructions:
  // Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.

  const sum = (...num: Array<number>) => {
    const sum = [...num].reduce((num, acm) => num + acm, 0);
    return sum;
  };
  console.log(sum(20, 30));
}
{
  /*

    Task 7: Type Assertion and Narrowing
Objective: Write a function that behaves differently based on the input type.

Instructions:

Create a function that accepts a parameter of type string | number.
The function should:
Return the length if the input is a string.
Return the square if the input is a number.

    */

  const makeSquare = (val: string | number) => {
    if (typeof val == "string") {
      return val.length;
    } else if (typeof val == "number") {
      return val * val;
    }
  };
  const res = makeSquare("45") as number;
  const res2 = makeSquare("ss") as number;
}
{
  /* 
      Task 8: Intersection Types
Objective: Practice using intersection types.

Instructions:

Create a type AdminUser that is an intersection of:
User with properties name and email
Admin with property adminLevel
Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.
      */
  type User = {
    name: string;
    email: string;
  };

  type AdminUser = User & { adminLevel: boolean };

  const describeAdmin = (user: AdminUser) => {
    return user.adminLevel
      ? `${user.name} is an Admin. His email is ${user.email}`
      : `${user.name} is not an Admin. His email is ${user.email}`;
  };

  console.log(
    describeAdmin({
      name: "hangru",
      adminLevel: false,
      email: "hang@ru.com",
    })
  );
}
{
  /* Task 9: Optional Chaining
Objective: Use optional chaining with nested objects.

Instructions:

Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining. */
  type Employee = {
    name?: string | undefined | null;
    address: {
      country: {
        name: string;
        location?: {
          city?: string;
          map?: [number, number];
        };
      };
    };
  };

  function getEmployeeCity(employee: Employee): string {
    // return employee.address?.country?.location?.city
    //   ? employee.address?.country?.location?.city
    //   : "not Added";
    return employee.address?.country?.location?.city ?? "not Added";
  }

  /* Task 10: Nullish Coalescing
Objective: Handle null and undefined values using nullish coalescing.

Instructions:

Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined. */
  function getDisplayName(name: string | null | undefined): string {
    return name ?? "Anonymous";
  }

  const employee: Employee = {
    address: {
      country: {
        name: "bulgeria",
        location: {
          city: "Dhaka",
        },
      },
    },
  };
  console.log(getEmployeeCity(employee));
  console.log(getDisplayName(employee.name));
}
{
  /* Task 11: Unknown Type
Objective: Handle different types with the unknown type.

Instructions:

Write a function processData(data: unknown) that:
Checks if data is a string and returns the uppercased version.
If data is a number, returns the square of it.
 */
  function processData(data: unknown): string | number {
    if (typeof data == "number") {
      return data * data;
    } else if (typeof data == "string") {
      return data.toUpperCase();
    } else {
      return "Invalid Data";
    }
  }

  console.log(processData("true"));
}
{
  /* 
Task 12: Never Type
Objective: Use the never type for functions that don’t return.

Instructions:

Write a function handleError that:
Accepts a message: string.
Throws an error with the given message.
Use the never return type to indicate that this function never returns. */
  const handleError = (str: string): never => {
    throw new Error(str);
  };
  //   console.log(handleError("login not okay"));
  //   console.log("success");
}

{
  /* Task 13: Generics with Functions and Interfaces
Objective: Use generics to handle different types.

Instructions:

Create a generic function that:
Accepts an array of any type.
Returns a new array with duplicate values removed. */

  //   type Remove<T> = (data: T) => Array<T>;

  const removeDuplicate = <T>(data: Array<T>): Array<T> => {
    // if (data.length > 2) return data;
    return [...new Set(data)];
  };

  console.log(removeDuplicate([10, 9, 8, 7, 10, 2]));
  console.log(removeDuplicate([]));
}

{
  /* Task 14: Asynchronous TypeScript and Type Aliases
Objective: Simulate an asynchronous operation with TypeScript.

Instructions:

Write an asynchronous function that:
Simulates fetching user data (containing name and age).
Returns the data after a short delay. */

  type Data = {
    name: string;
  };

  type User = {
    name: string;
    id: string;
  };
  const user = { name: "emu", email: "d@gmail.com", id: "s", st: "ss" };
  const getUserData = async (key: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      if (key == "1234") {
        setTimeout(() => {
          resolve(user);
        }, 2000);
      } else {
        reject(new Error("invalid key"));
      }
    });
  };

  const showUser = async () => {
    const resp = await getUserData("1234");
    console.log(resp);
  };
  showUser();
}

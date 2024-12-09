console.log("Welcome to OOPS-2");
//playground
{
  // Instance of Guard
  class animal {
    constructor(
      public name: string,
      public sound: string,
      public type: string
    ) {
      this.bark();
    }
    bark = () => {
      console.log(this.sound);
    };
  }
  class human extends animal {
    constructor(
      public name: string,
      public sound: string,
      public type: string,
      public money: number
    ) {
      super(name, sound, type);
      this.displayMoney();
    }
    displayMoney(): void {
      console.log(`I have ${this.money} TK`);
    }
  }
  class panda extends animal {
    constructor(
      public name: string,
      public sound: string,
      public type: string,
      public fightingSkills: string[]
    ) {
      super(name, sound, type);
      this.showFightCount();
    }
    showFightCount(): void {
      console.log(`I know ${this.fightingSkills.length} fight`);
    }
  }
  const isHuman = (anm: animal): anm is human => anm instanceof human;
  const isPanda = (anm: animal): anm is panda => anm instanceof panda;

  const getFood = (a: animal): void => {
    if (isHuman(a)) {
      console.log("Burger and Pizza");
    } else if (isPanda(a)) {
      console.log("dumpling and shushi");
    } else {
      console.log("unknown");
    }
  };

  const a1 = new human("emu", "hellowwwwwwwww", "lady", 1000);
  const a2 = new panda("poo", "yahoo", "kungfu panda", [
    "jumping",
    "kikcking",
    "rolling",
    "punching",
  ]);
  const a3 = new animal("billu", "mewo", "cat");

  getFood(a1);
  getFood(a2);
  getFood(a3);
}

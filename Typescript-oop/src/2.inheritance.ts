{
  //oop - inheritance
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

  const a1 = new animal("rustom", "gheu gheu", "dog");
  const a2 = new animal("billu", "mewo mweeewo", "cat");
  const a3 = new human("emu", "Owaa Owaa", "mankiller", 23050987);
}

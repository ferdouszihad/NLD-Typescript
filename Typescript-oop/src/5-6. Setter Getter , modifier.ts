console.log("Welcome to OOPS-2");
//playground

class Account {
  constructor(
    public readonly acc_no: number,
    public acc_name: string,
    protected acc_balance: number
  ) {
    this.welcome();
  }

  get balance(): number {
    return this.acc_balance;
  }

  set diposit(amount: number) {
    this.acc_balance += amount;
  }
  set withdraw(amount: number) {
    if (this.acc_balance >= amount) this.acc_balance -= amount;
  }

  welcome(): void {
    console.log(
      `Account Created!\nAcc-${this.acc_no} 💵 ${this.acc_balance} BDT - 👤 ${this.acc_name} `
    );
  }
}

class Sohoz extends Account {
  private scheme: "Sohoz" = "Sohoz";
  constructor(
    public readonly acc_no: number,
    public acc_name: string,
    protected acc_balance: number
  ) {
    super(acc_no, acc_name, acc_balance);
  }
  getScheme() {
    console.log(this.scheme);
  }
}
console.clear();
const newAcc1 = new Account(21457, "Israt Jahan", 0);
const newAcc2 = new Sohoz(21458, "Ferdous Zihad", 10);
newAcc2.getScheme();
newAcc2.diposit = 1000;
newAcc2.diposit = 1000;
console.log(newAcc2.balance);
newAcc2.diposit = 1000;
console.log(newAcc2.balance);
newAcc2.withdraw = 3010;
console.log(newAcc2.balance);

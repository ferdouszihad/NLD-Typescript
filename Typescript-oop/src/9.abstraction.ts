{
  interface smartPhone {
    onCamera(): void;
    playMusic(): void;
    watchVideo(): void;
  }

  class android implements smartPhone {
    onCamera(): void {
      console.log("camera on");
    }
    playMusic(): void {
      console.log("music on");
    }
    watchVideo(): void {
      console.log("video on");
    }
    constructor(public model: string) {}
  }

  const pocoM1 = new android("Poco M1 4/64");
  // pocoM1.onCamera();
  // pocoM1.playMusic();
}

{
  abstract class employee {
    abstract work(): void;
    abstract salaryReview(): void;
    constructor(public name: string, public designation: string) {}
  }

  class developer extends employee {
    constructor(public name: string, public designation: string) {
      super(name, designation);
    }
    work(): void {
      console.log("Project Dev + Scrum Management + Code Review");
    }
    salaryReview(): void {
      console.log("Salary increment up to 25%");
    }
  }

  const zihad = new developer("zihad", "soft Engineer");
  zihad.salaryReview();
  zihad.work();
}

class Counter {
  public static count: number = 0;
  inc() {
    return (Counter.count += 1);
  }
  dec() {
    return (Counter.count += 1);
  }
}
const stopwatch1 = new Counter();
const stopwatch2 = new Counter();
console.log(stopwatch1.inc());
console.log(stopwatch1.inc());
console.log(stopwatch1.inc());
console.log(stopwatch2.inc());

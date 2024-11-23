{
  //type assertion
  const minuteToSecond = (value: number | string): number | string => {
    if (typeof value === "number") {
      return value * 60;
    } else {
      const num: number = parseInt(value.split(" ")[0]);
      if (!isNaN(num)) {
        return num * 60;
      } else {
        return "invalid input";
      }
    }
  };

  const second = minuteToSecond("d 100 minute") as string;
  const second2 = minuteToSecond(200) as number;
}

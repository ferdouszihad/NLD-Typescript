"use strict";
{
    //type assertion
    const minuteToSecond = (value) => {
        if (typeof value === "number") {
            return value * 60;
        }
        else {
            const num = parseInt(value.split(" ")[0]);
            if (!isNaN(num)) {
                return num * 60;
            }
            else {
                return "invalid input";
            }
        }
    };
    const second = minuteToSecond("d 100 minute");
    const second2 = minuteToSecond(200);
}

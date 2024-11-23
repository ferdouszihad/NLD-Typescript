"use strict";
{
    //constraints
    const setLoginTime = (user) => {
        return Object.assign(Object.assign({}, user), { loginAt: new Date().toLocaleString() });
    };
    const loggedInUser1 = setLoginTime({ name: "zihad" });
    console.log(loggedInUser1);
    const loggedInUser2 = setLoginTime({ namasde: "zihad" });
    console.log(loggedInUser2);
}

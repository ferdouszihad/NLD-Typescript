"use strict";
{
    const createTuple = (p1, p2) => {
        return [p1, p2];
    };
    const couple = createTuple("Emu", "Zihad");
    const setLoginTime = (user) => {
        return Object.assign(Object.assign({}, user), { loginAt: new Date().toLocaleString() });
    };
}

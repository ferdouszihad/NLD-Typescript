{
  const createTuple = <T1, T2>(p1: T1, p2: T2) => {
    return [p1, p2];
  };

  const couple = createTuple<string, string>("Emu", "Zihad");

  const setLoginTime = <T>(user: T) => {
    return {
      ...user,
      loginAt: new Date().toLocaleString(),
    };
  };

  
}

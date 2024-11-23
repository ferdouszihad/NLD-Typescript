{
  //constraints
  const setLoginTime = <T extends { id: number }>(user: T) => {
    return {
      ...user,
      loginAt: new Date().toLocaleString(),
    };
  };

  const loggedInUser1 = setLoginTime({ name: "zihad", id: 11 });
  console.log(loggedInUser1);
  const loggedInUser2 = setLoginTime({ name: "zihad", id: 12 });
  console.log(loggedInUser2);
}

{
  const digCoin = (): Promise<number> => {
    return new Promise((resolve, reject) => {
      const random: number = parseInt(`${Math.random() * 10}`);
      if (random < 7) {
        resolve(1);
      } else {
        reject("mission failed");
      }
    });
  };

  const getCoin = async () => {
    const coin = await digCoin();
    console.log(coin);
  };
  getCoin();
}

{
  type PostData = {
    id: number;
    title: string;
    body: string;
  };

  const getData = async (url: string): Promise<Array<PostData>> => {
    const res = await fetch(url);
    const data: Array<PostData> = await res.json();
    return data;
  };

  const loader = async () => {
    const data = await getData("https://jsonplaceholder.typicode.com/posts");
    console.log(data);
  };
}

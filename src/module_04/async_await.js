const getName = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dorian");
    }, 1500);
  });
};

const sayHello = async () => {
  const name = await getName();
  return `Hello ${name}`;
};

sayHello().then((res) => console.log(res));

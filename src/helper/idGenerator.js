export const idGenerator = () => {
  const len = "4";
  const arr = "1234567890abcdefgh";
  let id = "";

  for (let i = len; i > 0; i--) {
    id += arr[Math.floor(Math.random() * arr.length)];
  }

  return id;
};

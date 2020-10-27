export const randElement = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

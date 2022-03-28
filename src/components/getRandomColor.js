export default function getRandomColor() {
  const randomNumber = () => Math.floor(Math.random() * (240 - 80 + 1) + 80);
  const color = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  return color;
}

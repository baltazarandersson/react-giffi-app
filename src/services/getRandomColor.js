export default function getRandomColor() {
  const randomNumber = (max, min) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const color = `hsla(${randomNumber(0, 360)}, ${randomNumber(
    70,
    100
  )}%, ${randomNumber(65, 75)}%, 1)`;
  return color;
}

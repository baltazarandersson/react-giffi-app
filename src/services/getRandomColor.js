export default function getRandomColor() {
  const randomNumber = (max, min) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const color = `hsla(${randomNumber(0, 360)}, 90%, 70%, 1)`;
  return color;
}

export default function getLucky(percentage?: number) {
  return Math.random() < (percentage ?? 0.1);
}

import { items } from "@/db/item";

export default function getRandomItems(count: number, excludeId?: number) {
  const filteredItems = items.filter((item) => item.id !== excludeId);
  return filteredItems.sort(() => Math.random() - 0.5).slice(0, count);
}

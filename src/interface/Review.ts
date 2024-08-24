export interface Review {
  id: number;
  userId: number;
  itemId: number;
  rating: number;
  scripts: string[];
  createdAt: number;
}

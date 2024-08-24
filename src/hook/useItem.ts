import db from "@/db";
import useSign from "./useSign";

export default function useItem() {
  const { user } = useSign();
  const response = db.logs.filter((log) => log.userId === user?.id);
  const itemsByUser = response.map((log) => {
    const item = db.items.find((item) => item.id === log.itemId);
    return {
      id: log.id,
      itemId: log.itemId,
      name: item?.name,
      amount: item?.amount,
      createdAt: log.createdAt,
    };
  });
  const item = (itemId: number) => db.items.find((item) => item.id === itemId);
  const reviewsByItem = (itemId: number) =>
    db.reviews
      .filter((review) => review.itemId === itemId)
      .sort((a, b) => b.createdAt - a.createdAt);
  const reviewsByUser = response.map((log) => {
    const review = db.reviews.find(
      (review) => review.userId === log.userId && review.itemId === log.itemId
    );
    return {
      id: review?.id,
      userId: log.userId,
      itemId: log.itemId,
      rating: review?.rating,
      scripts: review?.scripts,
      createdAt: review?.createdAt,
    };
  });
  const userByReview = (reviewId: number) => {
    const review = db.reviews.find((review) => review.id === reviewId);
    const user = db.users.find((user) => user.id === review?.userId);
    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
    };
  };
  return { itemsByUser, reviewsByItem, reviewsByUser, userByReview, item };
}

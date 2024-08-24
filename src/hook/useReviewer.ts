import useItem from "./useItem";
import useSign from "./useSign";

export default function useRevier({ itemId }: { itemId: number }) {
  const { user } = useSign();
  const { reviewsByItem, userByReview } = useItem();
  const reviewers = reviewsByItem(itemId).map((review) => {
    const user = userByReview(review.id);
    return {
      id: review.id,
      rating: review.rating,
      scripts: review.scripts,
      createdAt: review.createdAt,
      user: user,
    };
  });
  const uniqueReviewers = reviewers.filter(
    (reviewer, index, self) =>
      index === self.findIndex((r) => r.user.id === reviewer.user.id)
  );

  return { reviewers, uniqueReviewers };
}

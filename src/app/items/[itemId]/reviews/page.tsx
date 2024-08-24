import Svg from "@/asset/SVG";
import useItem from "@/hook/useItem";
import useRevier from "@/hook/useReviewer";
import useSign from "@/hook/useSign";
import getRandomInteger from "@/util/getRandomInteger";
import { cn } from "@coucoudas/ui";
import { useNavigate, useParams } from "react-router-dom";

export default function ReviewPage() {
  const router = useNavigate();
  const { itemId } = useParams();
  const { user } = useSign();
  const { item } = useItem();
  const { reviewsByItem, userByReview } = useItem();
  const { uniqueReviewers } = useRevier({ itemId: Number(itemId) });
  const container = {
    displays: "flex flex-col gap-y-3.5",
    positions: "relative",
    sizes: "w-full min-h-screen",
    boundaries: "py-8",
  };
  const standards = ["소재", "색상", "배송", "가격"];

  if (!itemId) return null;
  return (
    <div className={cn(container)}>
      <div className="px-4 text-[20px]">{item(Number(itemId))?.name} 리뷰</div>
      <div className="flex flex-col gap-y-7.5 px-4">
        {reviewsByItem(Number(itemId)).map((review) => (
          <div
            key={review.id}
            className="p-4 border-2 rounded-md border-gray-300"
          >
            <div></div>
            <div>{userByReview(review.id).name}</div>
            <div className="flex">
              {[...Array(review.rating)].map((_) => (
                <Svg.Icon.Star />
              ))}
              {[...Array(5 - review.rating)].map((_) => (
                <Svg.Icon.Star flag={false} />
              ))}
            </div>
            <div className="flex pt-4">
              <img
                src={`/images/items/${item(Number(itemId))?.image}`}
                className="min-w-8 h-8"
              />
            </div>
            <div className="text-xs py-4">{review.scripts.join(", ")}</div>
            {standards.map((standard) => {
              const score = getRandomInteger(
                20 * (review.rating - 1),
                review.rating * 20
              );
              return (
                <div className="flex justify-between	w-full">
                  <div className="font-pretendard-bold">{standard}</div>
                  <div>{scriptByScor(score)}</div>
                  <div className="font-pretendard-bold">{score}%</div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <button
        onClick={() => router(`/items/${itemId}/question`)}
        className="rounded-full w-16 h-16 fixed top-16 right-8  bg-blue-500 shadow-lg text-[14px] text-white"
      >
        질문
      </button>
    </div>
  );
}

const scriptByScor = (score: number) => {
  if (score < 70) return "아쉬워요";
  if (score < 80) return "보통이에요";
  if (score < 90) return "만족스러워요";
  return "최고에요";
};

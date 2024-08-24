import Footer from "@/components/Footer";
import { chatApi } from "@/connection";
import useItem from "@/hook/useItem";
import useSign from "@/hook/useSign";
import useUser from "@/hook/useUser";
import getRandomInteger from "@/util/getRandomInteger";
import { Button, cn, OnClick } from "@coucoudas/ui";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function QuestionPage() {
  const router = useNavigate();
  const { itemId } = useParams();
  const { user } = useSign();
  const { item } = useItem();
  const [question, setQuestion] = useState<string>("");
  const [one, setOne] = useState<number>(1);
  const [two, setTwo] = useState<number>(1);
  const [three, setThree] = useState<number>(0);
  const layout = {
    displays: "flex flex-col gap-y-3.5",
    boundaries: "p-4 pb-24",
  };
  const textareaBox = {
    sizes: "w-full h-48",
    boundaries: "focus:outline-none border-2 0 rounded-md p-3.5",
  };
  const { findUsersNotMe } = useUser();
  const { name, image, amount, discount } = item(Number(itemId)) ?? {};
  const { mutate: postQuestion, isSuccess } = useMutation({
    mutationFn: () =>
      chatApi.post({
        sender_id: Number(user?.id),
        title: `${item(Number(itemId))?.name} 상품에 대한 질문`,
        receiver_id_list: findUsersNotMe.map((user) => user.id),
        message: question,
        item_id: Number(itemId),
      }),
  });
  useEffect(() => {
    if (isSuccess) {
      alert("성공");
      return router("/chats");
    }
  }, [isSuccess]);

  function Label({
    flag = false,
    title,
    onClick,
  }: {
    flag?: boolean;
    title: string;
    onClick: OnClick;
  }) {
    const container = {
      displays: "flex justify-center items-center",
      boundaries: "px-4 py-1 rounded-full",
      backgrounds: !flag ? "bg-transparent" : "bg-[#BEE3F8]",
    };
    return (
      <button onClick={onClick} className={cn(container)}>
        {title}
      </button>
    );
  }
  return (
    <div>
      <div className={cn(layout)}>
        <div className="flex flex-col gap-y-3.5">
          <div className="text-[24px]">상품 정보 질문/공유하기</div>
          <div className="text-[20px]">제품 정보</div>
          <div className="h-[180px] flex items-center gap-x-7.5 border-2 rounded-md px-2">
            <div className="w-25 h-25 flex justify-center ">
              <img
                src={`/images/items/${image}`}
                className="max-w-25 h-25 gap-x-2"
              />
            </div>
            <div className="flex flex-col h-full justify-center gap-y-0.5">
              <div className="text-[12px]">무료배송</div>
              <div className="text-[14px]">{name}</div>
              <div className="flex flex-col">
                {!!discount && (
                  <div className="text-[14px] flex items-center gap-x-1">
                    <div>{discount}% </div>
                    <div className="line-through text-gray-500 font-pretendard-light">
                      {amount?.toLocaleString()}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center text-[20px] text-[#AE0000]">
                <div className="font-pretendard-bold">
                  {(
                    (amount ?? 0) -
                    ((amount ?? 0) / 100) * (discount ?? 0)
                  ).toLocaleString()}
                </div>
                <div>원</div>
                <div>
                  <img
                    src="/images/icons/panme-rocket.png"
                    width={99}
                    height={20}
                  />
                </div>
              </div>
              <div className="text-green-900">내일 월 도착보장</div>
              <div className="flex items-center gap-x-1">
                <img src="/images/icons/stars.png" width={68} height={12} />
                <div className="text-gray-500 text-[12px]">
                  ({getRandomInteger(500, 3000)})
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3.5">
          <div className="text-[20px]">리뷰어 조건 설정</div>
          <div className="flex flex-col gap-y-3.5">
            <div className="text-[18px]">별점</div>
            <div className="flex gap-x-1">
              {["별점 4~5점을 준 사람", "별점 1~3점을 준 사람"].map(
                (e, index) => (
                  <Label
                    onClick={() => setOne(index)}
                    flag={one === index}
                    title={e}
                  />
                )
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-3.5">
            <div className="text-[18px]">구매</div>
            <div className="flex gap-x-1">
              {["최근 1개월", "1개월~6개월", "6개월~1년 미만", "1년 이상"].map(
                (e, index) => (
                  <Label
                    onClick={() => setTwo(index)}
                    flag={two === index}
                    title={e}
                  />
                )
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-3.5">
            <div className="text-[18px]">구매 횟수</div>
            <div className="flex gap-x-1">
              {["1번", "2번 이상"].map((e, index) => (
                <Label
                  onClick={() => setThree(index)}
                  flag={three === index}
                  title={e}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3.5">
          <div className="text-[20px]">상대방에게 보이는 첫 질문</div>
          <textarea
            className={cn(textareaBox)}
            value={question}
            onChange={(e) => {
              if (e.target.value.length > 500)
                return alert("500자 이내로 작성해주세요.");
              setQuestion(e.target.value);
            }}
          />
          <div className="w-full justify-end flex">{question.length}/500</div>
        </div>
        <Button
          title="리뷰어에게 묻기"
          onClick={() => postQuestion()}
          option={{
            width: "w-full",
            background: "bg-[#346AFE]",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

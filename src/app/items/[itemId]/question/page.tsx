import Footer from "@/components/Footer";
import { chatApi } from "@/connection";
import useItem from "@/hook/useItem";
import useSign from "@/hook/useSign";
import useUser from "@/hook/useUser";
import { Button, cn } from "@coucoudas/ui";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function QuestionPage() {
  const router = useNavigate();
  const { itemId } = useParams();
  const { user } = useSign();
  const { item } = useItem();
  const [question, setQuestion] = useState<string>("");
  const layout = {
    displays: "flex flex-col gap-y-3.5",
    boundaries: "p-4 pb-24",
  };
  const textareaBox = {
    sizes: "w-full h-48",
    boundaries: "foucs:outline-none border-2 border-blue-500 rounded-md p-1.5",
  };
  const { findUsersNotMe } = useUser();
  const { name, image, amount } = item(Number(itemId)) ?? {};
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
  return (
    <div>
      <div className={cn(layout)}>
        <div className="flex flex-col gap-y-3.5">
          <div className="text-[24px]">상품 정보 질문/공유하기</div>
          <div className="text-[20px]">상품 정보</div>
          <div className="flex gap-x-7.5 border-2 rounded-md">
            <div className="w-36 h-36">
              <img src={`/images/items/${image}`} className="max-w-36 h-36" />
            </div>
            <div className="flex flex-col h-full justify-center gap-y-1.5">
              <div className="text-[24px]">{name}</div>
              <div className="flex text-[20px]">
                <div className="font-pretendard-bold">
                  {amount?.toLocaleString()}
                </div>
                <div>원</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3.5">
          <div className="text-[20px]">질문 보내기</div>
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
          title="질문 보내기"
          onClick={() => postQuestion()}
          option={{
            width: "w-full",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

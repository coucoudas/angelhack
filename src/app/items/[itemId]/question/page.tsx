import useItem from "@/hook/useItem";
import { Button, cn } from "@coucoudas/ui";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function QuestionPage() {
  const { itemId } = useParams();
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
  const { name, image, amount } = item(Number(itemId)) ?? {};
  return (
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
        onClick={() => {}}
        option={{
          width: "w-full",
        }}
      />
    </div>
  );
}

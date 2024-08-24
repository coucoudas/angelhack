import NoData from "@/components/NoData";
import { items } from "@/db/item";
import { Item } from "@/interface";
import getLucky from "@/util/getLucky";
import getRandomInteger from "@/util/getRandomInteger";
import getRandomItems from "@/util/getRandomItems";
import { cn } from "@coucoudas/ui";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment-timezone";

export default function ItemPage() {
  const { itemId } = useParams();
  const item = items.find((item) => item.id === Number(itemId));
  const { name, amount, discount, image } = item ?? {};
  const itemNumer = getRandomInteger(1, 12);
  const price = (
    (amount ?? 0) - Math.round(((amount ?? 0) / 100) * (discount ?? 0))
  ).toLocaleString();

  const randomItems = getRandomItems(5, Number(itemId));
  return (
    <div>
      {image ? (
        <img src={image} />
      ) : (
        <NoData
          script="NO IMAGE"
          option={{ text: "text-2xl", size: "w-full" }}
        />
      )}
      <div className="flex flex-col bg-gray-100 gap-y-2">
        <div className="flex px-4 flex-col bg-white">
          <div className=" pt-3 text-[#111111] text-[18px] font-pretendard-bold">
            {name}
          </div>
          <div className="h-8 text-[#637381] text-[14px]">
            원산지: 상세페이지 참조
          </div>
          <div className="flex justify-between border-2 p-[6px] rounded-sm">
            <div className="flex flex-col">
              <div className="text-[#555555] text-[12px]">총수량</div>
              <div className="text-[14px] font-pretendard-bold">
                {itemNumer}개
              </div>
            </div>
            <div className="flex justify-end items-center">
              {image && <img src={image} />}
              <button className="text-blue-500">{">"}</button>
            </div>
          </div>
          <div className="flex items-center gap-x-2.5 mt-2.5">
            <div className="text-[14px]">수량</div>
            <Counter />
          </div>
          <div className="flex text-[20px] mt-1">
            <div className="font-pretendard-bold ">
              {amount?.toLocaleString()}
            </div>
            <div>원</div>
          </div>
          {discount && (
            <div className="flex text-[20px] text-[#AE0000] ">
              <div className="font-pretendard-bold ">{price}</div>
              <div>원</div>
            </div>
          )}
          <div>판매자 로켓 | 내일 {moment(new Date()).format("DD")} </div>
          <div className="text-[14px] text-[#888888] pb-4 border-b">
            무료배송
          </div>
          <div className="flex items-center  justify-between h-20">
            <div className="flex gap-x-2.5">
              <div className="w-[38px] h-[38px] rounded-xl shadow-md ">
                <img src="/images/logos/coupang.png" />
              </div>
              <div className="flex flex-col">
                <div className="text-[#454F5B] text-[12px]">
                  쿠팡 앱에서만 제공되는
                </div>
                <div className="text-[#008C00] text-[14px] font-pretendard-bold">
                  혜택과 할인을 놓치지 마세요.
                </div>
              </div>
            </div>
            <button className="text-white bg-[#346AFF] w-[72px] h-[26px] text-[12px] flex justify-center items-center rounded-md">
              앱에서 보기
            </button>
          </div>
        </div>
        <div className="bg-white ">
          <div className="px-4 text-[18px] h-[54px] flex items-center font-pretendard-bold">
            다른 고객이 본 상품
          </div>
          <div className="flex overflow-x-scroll w-full">
            {randomItems.map((item) => (
              <div className="min-w-[145px]">
                <ItemBoxSmall key={item.id} item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemBoxSmall({ item }: { item: Item }) {
  const container = {
    displays: "flex flex-col ",
    sizes: "w-[145px] h-[286px]",
    styles: "border-r",
    boundaries: "pt-4 px-4",
  };
  const router = useNavigate();
  const { name, amount, discount, image } = item;
  const price = (
    (amount ?? 0) - Math.round(((amount ?? 0) / 100) * (discount ?? 0))
  ).toLocaleString();
  return (
    <button
      onClick={() => router(`/items/${item.id}`)}
      className={cn(container)}
    >
      {!image ? (
        <NoData
          script="NO IMAGE"
          option={{
            size: "w-[112px]",
          }}
        />
      ) : (
        <img src={image} />
      )}
      <div className="flex flex-col">
        <div className="text-[14px] leading-tight mt-3">{name}</div>
        <div className="flex text-[#AE0000] text-[14px] mt-1">
          <div className="font-pretendard-bold ">{price}</div>
          <div>원</div>
        </div>
        {getLucky(0.5) && (
          <img
            src="/images/icons/rocket-large.png"
            width={56}
            height={14}
            className="mt-1"
          />
        )}
        <img src="/images/icons/stars.png" width={72} className="mt-1" />
      </div>
    </button>
  );
}
function Counter() {
  const [count, setCount] = useState<number>(1);
  return (
    <div className="flex w-[110px] h-[32px] rounded-md border">
      <button
        onClick={() => {
          if (count > 1) return setCount(count - 1);
        }}
        className="text-xl flex justify-center items-center w-[30px] h-full"
      >
        -
      </button>
      <div className="w-[60px] flex justify-center items-center ">{count}</div>
      <button
        onClick={() => setCount(count + 1)}
        className="text-xl flex justify-center items-center w-[30px] h-full"
      >
        +
      </button>
    </div>
  );
}

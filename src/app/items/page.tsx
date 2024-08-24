import NoData from "@/components/NoData";
import db from "@/db";
import { Item } from "@/interface";
import getRandomInteger from "@/util/getRandomInteger";
import { cn } from "@coucoudas/ui";
import { useNavigate } from "react-router-dom";

export default function ItemsPage() {
  return (
    <div>
      {db.items.map((item) => (
        <ItemBox key={item.id} item={item} />
      ))}
    </div>
  );
}

function ItemBox({ item }: { item: Item }) {
  const router = useNavigate();
  const box = {
    displays: "flex gap-x-2.5 items-center",
    boundaries: "border-b p-2.5",
    sizes: "h-[143.5px]",
    texts: "text-sm",
  };
  const rightBox = {
    displays: "flex flex-col",
  };
  const { amount, discount } = item;
  const reviewNumber = getRandomInteger(100000, 1200000);
  return (
    <button onClick={() => router(`/items/${item.id}`)} className={cn(box)}>
      {item.image ? <img src={item.image} /> : <NoData script="NO IMAGE" />}
      <div className={cn(rightBox)}>
        <div className="flex justify-start font-pretendard-bold">
          {item.name}
        </div>
        <div className="flex items-center text-[#AE0000]">
          <div className="font-pretendard-bold">
            {item.amount.toLocaleString()}
          </div>
          <div>원</div>
        </div>
        <div className="flex items-center">
          <div>
            {(
              amount - Math.round((amount / 100) * (discount ?? 0))
            ).toLocaleString()}
          </div>
          <img src="/images/icons/rocket-large.png" width={64} height={16} />
        </div>
        <div className="flex justify-start text-[#008C00]">
          내일(일) 도착보장
        </div>
        <div className="flex items-center">
          <img src="/images/icons/stars.png" className="w-17" />
          <div className="text-[11px] text-[#888888]">
            ({reviewNumber.toLocaleString()})
          </div>
        </div>
      </div>
    </button>
  );
}
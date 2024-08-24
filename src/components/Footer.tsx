import Svg from "@/asset/SVG";
import { cn } from "@coucoudas/ui";

export default function Footer() {
  const container = {
    displays: "flex flex-col items-center",
    backgrounds: "bg-[#EEEEEE]",
    texts: "text-[#555555] text-[11px]",
    sizes: "w-full ",
    boundaries: "px-12 pt-16 pb-28",
  };
  const contents = [
    "회사소개",
    "이용약관",
    "개인정보처리방침",
    "청소년보호정책",
    "사업자정보확인",
    "전자금융거래약관",
    "판매이용약관",
    "쿠팡페이 서비스 이용약관",
    "쿠팡페이 개인정보처리방침",
  ];

  return (
    <div className={cn(container)}>
      <div className="flex flex-wrap w-full px-4 justify-center">
        {contents.map((content, index) => (
          <div className="flex items-center ">
            {index !== 0 && <div className="mx-2">|</div>}
            <div>{content}</div>
          </div>
        ))}
      </div>
      <div className="pt-12 flex flex-col gap-y-4">
        <div>
          상호명 및 호스팅 서비스 제공 : 쿠팡(주) 대표이사 : 강한승,박대준
          사업자등록번호:120-88-00767 | 통신판매업신고:2017-서울송파-0680 서울시
          송파구 송파대로 570 | 고객센터 : 1577-7011(유료)사이버몰 내 판매되는
          상품 중에는 쿠팡에 등록한 개별 판매자가 판매하는
          마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
          마켓플레이스(오픈마켓) 상품의 경우 쿠팡은 통신판매중개자이며
          통신판매의 당사자가 아닙니다. 쿠팡은 마켓플레이스(오픈마켓) 상품,
          거래정보 및 거래 등에 대하여 책임을 지지 않습니다. 쿠팡은 소비자
          보호와 안전거래를 위해 신뢰관리센터(CM112@coupang.com)를 운영하고
          있으며, 관련 분쟁이 발생할 경우 별도의 분쟁처리절차에 의거 분쟁이
          처리됩니다.
        </div>
        <div>Copyright © Coupang Corp. 2010-2024 All Rights Reserved.</div>
      </div>
      <div className="w-full flex justify-end mt-12">
        <Svg.Logo.Coucoudas />
      </div>
    </div>
  );
}

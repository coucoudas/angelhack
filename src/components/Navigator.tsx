import Svg from "@/asset/SVG";
import { cn, OnClick } from "@coucoudas/ui";
import { useActionStore } from "@coucoudas/ui/store";
import { ReactNode } from "react";

interface Content {
  title: string;
  icon: ReactNode;
  onClick?: OnClick;
}
export default function Navigator() {
  const { setView } = useActionStore();
  const container = {
    positions: "fixed bottom-0 left-0",
    displays: "flex ",
    sizes: "w-full h-16",
    backgrounds: "bg-white",
  };

  const contents: Content[] = [
    {
      title: "카테고리",
      icon: <Svg.IconNav.Hamburger />,
      onClick: () => setView("overlay"),
    },
    {
      title: "검색",
      icon: <Svg.IconNav.Search />,
    },
    {
      title: "쿠팡홈",
      icon: <Svg.IconNav.Home />,
    },
    {
      title: "마이쿠팡",
      icon: <Svg.IconNav.Search />,
    },
    {
      title: "장바구니",
      icon: <Svg.IconNav.Cart />,
    },
  ];

  return (
    <div className={cn(container)}>
      {contents.map((content, index) => (
        <div
          key={index}
          onClick={content.onClick}
          className="flex flex-col justify-center items-center flex-1 gap-x-2"
        >
          <div className=" flex justify-center items-center h-7/10">
            {content.icon}
          </div>
          <div className="text-[12px] text-[#555555]">{content.title}</div>
        </div>
      ))}
    </div>
  );
}

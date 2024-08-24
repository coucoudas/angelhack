import Svg from "@/asset/SVG";
import useSign from "@/hook/useSign";
import { cn, OnClick, ShowAction } from "@coucoudas/ui";
import { useActionStore } from "@coucoudas/ui/store";
import { useNavigate } from "react-router-dom";
import { useTransition, animated } from "react-spring";

interface OverlayProps {
  showAction?: ShowAction;
}
interface Content {
  title: string;
  icon: React.ReactNode;
  onClick?: OnClick;
}

export default function Overlay({ showAction }: OverlayProps) {
  const router = useNavigate();
  const { user } = useSign();
  const { removeView, setIsOwn, clearView } = useActionStore();
  const { isVisible, event } = showAction ?? {};
  const transitions = useTransition(isVisible, {
    from: { width: "10%", opacity: 0 },
    enter: { width: "100%", opacity: 1 },
    leave: { width: "10%", opacity: 0 },
    config: { duration: 300 },
  });
  const container = {
    positions: "fixed top-0 left-0 z-50",
    sizes: "min-h-screen",
    styles: "box-shadow-md bg-white",
    boundaries: "pt-20 px-4",
  };
  const button = {
    positions: "absolute top-2 left-2",
    displays: "flex justify-center items-center ",
    sizes: "w-7 h-7",
  };
  const features: Content[] = [
    {
      title: "주문목록",
      icon: <Svg.IconBlue.Menu />,
      onClick: () => alert("주문목록"),
    },
    {
      title: "찜한상품",
      icon: <Svg.IconBlue.Heart />,
      onClick: () => alert("사랑해요"),
    },
    {
      title: "최근본상품",
      icon: <Svg.IconBlue.BackPack />,
      onClick: () => alert("가방가방"),
    },
    {
      title: "리뷰어 채팅",
      icon: <Svg.IconBlue.Chat />,
      onClick: () => {
        window.location.href = "/chats";
      },
    },
  ];
  const contents: Content[] = [
    {
      title: "쿠팡 리뷰어",
      icon: <Svg.Icon.ThumbsUp />,
      onClick: () => {
        window.location.href = "/chats";
      },
    },
    {
      title: "주문목록",
      icon: <Svg.Icon.Menu />,
    },
    {
      title: "취소, 반품, 교환목록",
      icon: <Svg.Icon.Cancel />,
    },
    {
      title: "선물함",
      icon: <Svg.Icon.Present />,
    },
    {
      title: "와우 멤버쉽",
      icon: <Svg.Icon.Wow />,
    },
    {
      title: "구독 관리",
      icon: <Svg.Icon.Subscribe />,
    },
    {
      title: "정기배송",
      icon: <Svg.Icon.Baesong />,
    },
    {
      title: "결제수단",
      icon: <Svg.Icon.CouPay />,
    },
    {
      title: "안녕",
      icon: <Svg.Icon.Jumun />,
    },
  ];
  return transitions(
    (styles, item) =>
      item && (
        <animated.div
          style={styles}
          className={cn(container)}
          onClick={() => setIsOwn("overlay")}
        >
          {event && (
            <button onClick={() => removeView(event)} className={cn(button)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.28003 5.22C6.13786 5.08752 5.94981 5.0154 5.75551 5.01882C5.56121 5.02225 5.37582 5.10096 5.23841 5.23838C5.101 5.37579 5.02228 5.56118 5.01886 5.75548C5.01543 5.94978 5.08755 6.13782 5.22003 6.28L8.94003 10L5.22003 13.72C5.14634 13.7887 5.08724 13.8715 5.04625 13.9635C5.00526 14.0555 4.98322 14.1548 4.98144 14.2555C4.97966 14.3562 4.99819 14.4562 5.03591 14.5496C5.07363 14.643 5.12977 14.7278 5.20099 14.799C5.27221 14.8703 5.35705 14.9264 5.45043 14.9641C5.54382 15.0018 5.64385 15.0204 5.74455 15.0186C5.84526 15.0168 5.94457 14.9948 6.03657 14.9538C6.12857 14.9128 6.21137 14.8537 6.28003 14.78L10 11.06L13.72 14.78C13.7887 14.8537 13.8715 14.9128 13.9635 14.9538C14.0555 14.9948 14.1548 15.0168 14.2555 15.0186C14.3562 15.0204 14.4562 15.0018 14.5496 14.9641C14.643 14.9264 14.7279 14.8703 14.7991 14.799C14.8703 14.7278 14.9264 14.643 14.9642 14.5496C15.0019 14.4562 15.0204 14.3562 15.0186 14.2555C15.0168 14.1548 14.9948 14.0555 14.9538 13.9635C14.9128 13.8715 14.8537 13.7887 14.78 13.72L11.06 10L14.78 6.28C14.9125 6.13782 14.9846 5.94978 14.9812 5.75548C14.9778 5.56118 14.8991 5.37579 14.7617 5.23838C14.6242 5.10096 14.4389 5.02225 14.2446 5.01882C14.0503 5.0154 13.8622 5.08752 13.72 5.22L10 8.94L6.28003 5.22Z"
                  fill="#7F7F7F"
                />
              </svg>
            </button>
          )}
          <div className="flex flex-col">
            {!user ? (
              <button
                onClick={() => router("/sign-in")}
                className="text-[22px] flex justify-start"
              >
                로그인을 해주세요 {">"}
              </button>
            ) : (
              <div>
                <div className="flex items-center gap-x-1">
                  <div className="text-[22px]">{user.name}</div>
                  <div className="text-[14px]">{">"}</div>
                </div>
                <div className="flex items-center gap-x-1 text-[12px] text-blue-500">
                  <div className="flex items-center rounded-sm px-1 bg-blue-500 text-white text-[8px]">
                    WOW
                  </div>
                  <div>와우회원</div>
                </div>
              </div>
            )}
            <div className="flex flex-row w-full py-12">
              {features.map((feature) => (
                <button
                  onClick={feature.onClick}
                  className="flex flex-col items-center flex-1"
                >
                  <div>{feature.icon}</div>
                  <div>{feature.title}</div>
                </button>
              ))}
            </div>
          </div>
          {contents.map((content) => (
            <button
              onClick={content.onClick}
              className="flex items-center h-15 border-b gap-x-4"
            >
              <div className="w-6 h-6">{content.icon}</div>
              <div className="text-">{content.title}</div>
            </button>
          ))}
        </animated.div>
      )
  );
}

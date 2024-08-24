import { cn, OnClick } from "@coucoudas/ui";
import { useEffect } from "react";
import moment from "moment-timezone";
import useUser from "@/hook/useUser";
import { images } from "@/asset/images";
import { useNavigate } from "react-router-dom";
import useChat from "@/hook/useChat";
import useSign from "@/hook/useSign";

export default function ChatsPage() {
  const router = useNavigate();
  const { user } = useSign();
  const { findByUserId } = useUser();
  const { chatsData } = useChat();
  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      location.href = "/sign-in";
    }
  }, [user]);
  return (
    <div className="min-h-screen w-full">
      <div className="flex items-center h-[56px] px-2 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15 5L8 12L15 19"
            stroke="#868E96"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="text-[22px]">리뷰어 채팅</div>
      </div>
      {chatsData?.results
        ?.sort((a, b) => {
          return moment(b.updated_at).unix() - moment(a.updated_at).unix();
        })
        .map((result) => (
          <ChatBox
            onClick={() => router(`/chats/${result.id}`)}
            name={findByUserId(result.receiver_id)?.name ?? "김쿠팡"}
            message="마지막으로 온 메시지"
            createdAt={moment(result.updated_at).unix()}
          />
        ))}
    </div>
  );
}

function ChatBox({
  onClick,
  name,
  message,
  createdAt,
}: {
  onClick: OnClick;
  name: string;
  message: string;
  createdAt: number;
}) {
  const container = {
    sizes: "w-full h-[68px]",
    boundaries: "px-5 py-3.5",
  };

  const profile = Math.floor(Math.random() * images.length);
  return (
    <button onClick={onClick} className={cn(container)}>
      <div className="flex justify-between">
        <div className="flex gap-x-2">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <img src={`/images/users/${images[profile]}`} />
          </div>
          <div className="flex flex-col items-start">
            <div>{name}</div>
            <div>{message}</div>
          </div>
        </div>
        <div>{moment.unix(createdAt).format("오후 HH:mm")}</div>
      </div>
    </button>
  );
}

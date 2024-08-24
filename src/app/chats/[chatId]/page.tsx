import { ItemBox } from "@/app/items/page";
import { chatApi } from "@/connection";
import useChat from "@/hook/useChat";
import useItem from "@/hook/useItem";
import useSign from "@/hook/useSign";
import { cn } from "@coucoudas/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import moment from "moment-timezone";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function ChatPage() {
  const { chatId } = useParams();
  const { user } = useSign();
  const { item } = useItem();
  const { findByChatId } = useChat();
  const chatInfo = findByChatId(Number(chatId));
  const [chat, setChat] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const inputBox = {
    sizes: "w-full h-[56px]",
    boundaries: "rounded-full",
    backgrounds: "bg-gray-50",
    styles: "focus:outline-none pl-6.5",
  };
  const { mutate: postChat, isSuccess } = useMutation({
    mutationKey: ["postChat"],
    mutationFn: () =>
      chatApi.chat.post({
        room_id: Number(chatId),
        sender_id: Number(user?.id),
        content: chat,
      }),
  });
  const { data: chatData } = useQuery({
    enabled: !!user,
    queryKey: ["getChatRooms", isSuccess],
    queryFn: () => chatApi.chat.get(Number(chatId)),
  });
  const handleEnterPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") postChat();
  };
  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement)
      inputElement.addEventListener("keydown", handleEnterPress);
    return () => {
      if (inputElement)
        inputElement.removeEventListener("keydown", handleEnterPress);
    };
  }, []);
  useEffect(() => {
    if (isSuccess) setChat("");
  }, [isSuccess]);
  const nowItem = item(Number(chatInfo?.item_id));
  return (
    <div className="relative min-h-screen px-3.5 flex flex-col gap-y-5.5">
      <div className="flex flex-col items-center w-full">
        {nowItem && (
          <button
            onClick={() => {
              location.href = `/items/${nowItem.id}`;
            }}
            className="flex w-full justify-center bg-white"
          >
            <div className="w-[320px] border-2">
              <ItemBox item={nowItem} />
            </div>
          </button>
        )}
      </div>
      {chatData?.results
        ?.sort((a, b) => {
          return (
            moment(b.created_at_at).unix() - moment(a.created_at_at).unix()
          );
        })
        .slice(0, 5)
        .sort((a, b) => {
          return (
            moment(a.created_at_at).unix() - moment(b.created_at_at).unix()
          );
        })
        .map((chat) => (
          <ChatBox
            isMe={chat.member_id === user?.id}
            message={chat.content}
            createdAt={moment(chat.created_at_at).unix()}
          />
        ))}
      <div className="fixed bottom-16 left-0 flex items-center w-full h-[88px] px-2 bg-white">
        <input
          ref={inputRef}
          className={cn(inputBox)}
          placeholder="채팅을 입력하세요."
          value={chat}
          onChange={(e) => setChat(e.target.value)}
        />
      </div>
    </div>
  );
}
function ChatBox({
  isMe = false,
  createdAt,
  message,
}: {
  message: string;
  createdAt: number;
  isMe?: boolean;
}) {
  if (isMe)
    return (
      <div className="flex flex-col items-end">
        <div className="ml-auto rounded-l-xl w-full max-w-80 rounded-t-xl p-4 bg-[#D0EBFF]">
          {message}
        </div>
        <div>{moment(createdAt).format("hh:mm A")}</div>
      </div>
    );
  return (
    <div>
      <div className="mr-auto rounded-r-xl rounded-t-xl w-full max-w-80 p-4 border border-gray-300 ">
        {message}
      </div>
      {moment(createdAt).format("YYYY-MM-DD HH:mm")}
    </div>
  );
}

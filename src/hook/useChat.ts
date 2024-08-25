import { useQueries } from "@tanstack/react-query";
import useSign from "./useSign";
import { chatApi } from "@/connection";

export default function useChat() {
  const { user } = useSign();
  const [{ data: chatsData }, { data: chatsListData }] = useQueries({
    queries: [
      {
        enabled: !!user,
        queryKey: ["getChatRooms"],
        queryFn: () => chatApi.getAll(Number(user?.id)),
      },
      {
        enabled: !!user,
        queryKey: ["getChatRoomsList"],
        queryFn: () => chatApi.list.get(Number(user?.id)),
      },
    ],
  });
  const findByChatId = (chatId: number) =>
    chatsData?.results?.find((result) => result.id === chatId);
  const findListByChatId = (chatId: number) =>
    chatsListData?.results?.find((result) => result.room_id === chatId);

  return { chatsData, chatsListData, findByChatId, findListByChatId };
}

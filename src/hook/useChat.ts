import { useQuery } from "@tanstack/react-query";
import useSign from "./useSign";
import { chatApi } from "@/connection";

export default function useChat() {
  const { user } = useSign();
  const { data: chatsData } = useQuery({
    enabled: !!user,
    queryKey: ["getChatRooms"],
    queryFn: () => chatApi.getAll(Number(user?.id)),
  });
  const findByChatId = (chatId: number) =>
    chatsData?.results?.find((result) => result.id === chatId);

  return { chatsData, findByChatId };
}

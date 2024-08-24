import { useParams } from "react-router-dom";

export default function ChatPage() {
  const { chatId } = useParams();
  return <div>{chatId}</div>;
}

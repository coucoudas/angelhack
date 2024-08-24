import {
  ChatGET,
  ChatPOSTRequest,
  RoomChatGET,
  RoomChatPOSTRequest,
} from "@/interface/Chat";
import httpRequest from "../axios";

const api = httpRequest.api(undefined);

async function getRooms(userId: number) {
  const responses = await api.get<ChatGET>(`/chat/rooms`, {
    params: {
      user_id: userId,
    },
    withCredentials: false,
  });
  return responses.data;
}

async function postRoom(data: ChatPOSTRequest) {
  return await api.post(`/chat/rooms`, data, {
    withCredentials: false,
  });
}

async function getRoomChat(roomId: number) {
  const response = await api.get<RoomChatGET>(`/chat/rooms/chat/${roomId}`, {
    withCredentials: false,
  });
  return response.data;
}

async function postRoomChat(data: RoomChatPOSTRequest) {
  return await api.post(`/chat/rooms/chat`, data, {
    withCredentials: false,
  });
}

const chatApi = {
  getAll: getRooms,
  post: postRoom,
  chat: {
    get: getRoomChat,
    post: postRoomChat,
  },
};

export default chatApi;

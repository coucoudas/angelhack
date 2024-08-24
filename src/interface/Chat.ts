export interface ChatGETResult {
  id: number;
  title: string;
  sender_id: number;
  receiver_id: number;
  updated_at: Date;
  isaccepted: boolean;
  item_id: number;
}

export interface ChatGET {
  message: string;
  results: ChatGETResult[];
}

export interface ChatPOSTRequest {
  sender_id: number;
  title: string;
  receiver_id_list: number[];
  message: string;
  item_id: number;
}

interface Result {
  id: number;
  room_id: number;
  member_id: number;
  content: string;
  created_at_at: Date;
}

export interface RoomChatGET {
  message: string;
  results: Result[];
}

export interface RoomChatPOSTRequest {
  room_id: number;
  sender_id: number;
  content: string;
}

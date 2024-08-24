import { User } from "@/interface/User";

const users: User[] = [
  {
    id: 1,
    username: "minhyeong",
    name: "박민형",
    email: "minhyeong.dev@gmail.com",
    password: "asdfasdf",
  },
  {
    id: 2,
    username: "yuheejin",
    name: "유희진",
    email: "hee98.09.14@gmail.com",
    password: "asdfasdf",
  },
  {
    id: 3,
    username: "yunjeong",
    name: "오윤정",
    email: "dhdbswjd124@gmail.com",
    password: "asdfasdf",
  },
  {
    id: 4,
    username: "rocknroll17",
    name: "김수곤",
    email: "gon1397@naver.com",
    password: "asdfasdf",
  },
];

interface PurchaseLog {
  id: 1;
  userId: 4;
  itemId: 2;
}

const purchaseLogs: PurchaseLog[] = [
  {
    id: 1,
    userId: 4,
    itemId: 2,
  },
];

export { users };

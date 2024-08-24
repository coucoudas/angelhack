import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "./page";
import About from "./about";
import _404 from "./404";
import SignInPage from "./sign-in/page";
import SignUpPage from "./sign-up/page";
import FindUsername from "./find/username/page";
import FindPassword from "./find/password/page";
import MyPage from "./mypage/page";
import RootLayout from "./layout";
import SupportPage from "./supports/page";
import ChatsPage from "./chats/page";
import ItemsPage from "./items/page";
import ItemPage from "./items/[itemId]/page";
import ChatPage from "./chats/[chatId]/page";
import Layout from "@/components/Layout";
import ReviewPage from "./items/[itemId]/reviews/page";
import QuestionPage from "./items/[itemId]/question/page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<RootPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/find">
            <Route path="username" element={<FindUsername />} />
            <Route path="password" element={<FindPassword />} />
          </Route>
          <Route path="/items" element={<Layout />}>
            <Route index element={<ItemsPage />} />
            <Route path=":itemId" element={<ItemPage />} />
            <Route path=":itemId/reviews" element={<ReviewPage />} />
            <Route path=":itemId/question" element={<QuestionPage />} />
          </Route>
          <Route path="/chats" element={<Layout />}>
            <Route index element={<ChatsPage />} />
            <Route path=":chatId" element={<ChatPage />} />
          </Route>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/supports" element={<SupportPage />} />
          <Route path="*" element={<_404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import useSignStore from "@/store/signStore";
import { cn } from "@coucoudas/ui";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const router = useNavigate();
  const { signOut } = useSignStore();
  const container = {
    positions: "absolute top-0 left-0",
    displays: "flex items-center justify-between ",
    sizes: "w-full h-12",
    backgrounds: "bg-white",
    boundaries: "px-4",
  };
  const block = {
    sizes: "w-full h-12",
  };
  return (
    <>
      <div className={cn(block)} />
      <div className={cn(container)}>
        <div>COUCOUDAS</div>
        <div className="flex gap-x-4">
          <button onClick={() => router("/mypage")}>마이페이지</button>
          <button onClick={() => signOut()}>로그아웃</button>
        </div>
      </div>
    </>
  );
}

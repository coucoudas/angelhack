import Header from "@/components/common/Header";
import useSignStore from "@/store/signStore";
import { cn } from "@coucoudas/ui";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RootPage() {
  const router = useNavigate();
  const { user } = useSignStore();

  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      router("/sign-in");
    }
  }, [user]);
  const layout = {
    sizes: "w-full min-h-screen",
  };
  return (
    <div className={cn(layout)}>
      <Header />
      <iframe src="https://www.coupang.com" className={cn(layout)} />
    </div>
  );
}

import useItem from "@/hook/useItem";
import useSign from "@/hook/useSign";
import { cn } from "@coucoudas/ui";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment-timezone";
export default function MyPage() {
  const router = useNavigate();
  const { user } = useSign();

  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      router("/sign-in");
    }
  }, [user]);
  const layout = {
    displays: "flex justify-center items-center",
    sizes: "w-full min-h-screen",
  };
  const body = {
    displays: "flex flex-col",
  };
  return <div className={cn(layout)}></div>;
}

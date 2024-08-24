import Header from "@/components/common/Header";
import useSignStore from "@/store/signStore";
import { cn } from "@coucoudas/ui";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RootPage() {
  const router = useNavigate();
  const { user } = useSignStore();

  const layout = {
    sizes: "w-full min-h-screen",
  };
  return (
    <div>
      <Header />
      <iframe src="https://www.coupang.com" className={cn(layout)} />
    </div>
  );
}

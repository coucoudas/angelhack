import { cn } from "@coucoudas/ui";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const container = {
    sizes: "w-full min-h-screen",
    fonts: "font-pretendard-medium",
  };
  return (
    <div className={cn(container)}>
      <Outlet />
    </div>
  );
}

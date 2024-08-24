import { cn } from "@coucoudas/ui";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const container = {
    sizes: "w-full min-h-screen",
    fonts: "font-pretendard-medium",
  };
  return <div className={cn(container)}>{children}</div>;
}

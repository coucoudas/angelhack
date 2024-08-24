import { cn } from "@coucoudas/ui";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const layout = {
    displays: "flex flex-col",
    sizes: "w-full max-w-[1200px] min-h-screen",
    backgrounds: "bg-white",
  };
  const body = {
    displays: "flex flex-col",
  };
  return (
    <div className="flex justify-center bg-gray-200">
      <div className={cn(layout)}>
        <Header />
        <div className={cn(body)}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

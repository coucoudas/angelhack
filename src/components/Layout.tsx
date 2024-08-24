import { Action, cn } from "@coucoudas/ui";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navigator from "./Navigator";
import Overlay from "./Overlay";

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
    <Action.Show actions={[["overlay", <Overlay />]]}>
      <div className="flex justify-center bg-gray-200">
        <div className={cn(layout)}>
          <Header />
          <div className={cn(body)}>
            <Outlet />
          </div>
          <Footer />
        </div>
        <Navigator />
      </div>
    </Action.Show>
  );
}

import { cn } from "@coucoudas/ui";

export default function ChatsPage() {
  const layout = {
    displays: "flex flex-col",
    sizes: "w-full max-w-[456px] min-h-screen",
    backgrounds: "bg-white",
  };
  return (
    <div className={cn(layout)}>
      <div>채팅방</div>
    </div>
  );
}

function ChatBox() {
  const container = {
    sizes: "w-full h-[68px]",
    boundaries: "px-5 py-3.5",
  };
  return (
    <div className={cn(container)}>
      <div className="flex gap-x-2">
        <div className="rounded-full w-10 h-10 bg-black"></div>
        <div>
          <div>{}</div>
        </div>
      </div>
    </div>
  );
}

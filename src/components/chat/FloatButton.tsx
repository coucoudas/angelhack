import { cn } from "@coucoudas/ui";
import { useTransition, animated } from "react-spring";

export default function FloatButton({ flag }: { flag?: boolean }) {
  const box = {
    positions: "fixed bottom-10 right-10",
    displays: "flex justify-center items-center",
    sizes: "w-24 h-24",
    backgrounds: "bg-white",
    boundaries: "rounded-full border-2 border-gray-600",
  };
  const transition = useTransition(flag, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });
  return transition(
    (styles, item) =>
      item && (
        <animated.div style={styles} className={cn(box)}>
          채팅개설
        </animated.div>
      )
  );
}

import db from "@/db";
export default function useUser() {
  const findByUserId = (userId: number) =>
    db.users.find((user) => user.id === userId);
  return { findByUserId };
}

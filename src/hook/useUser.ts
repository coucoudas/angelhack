import db from "@/db";
import useSign from "./useSign";
export default function useUser() {
  const { user } = useSign();
  const findByUserId = (userId: number) =>
    db.users.find((user) => user.id === userId);
  const findUsersNotMe = db.users.filter((_user) => _user.id !== user?.id);
  return { findByUserId, findUsersNotMe };
}

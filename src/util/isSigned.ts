import db from "@/db";

const isSigned = ({
  username,
  email,
  password,
}: {
  email?: string;
  username?: string;
  password?: string;
}) => {
  const user = db.users.find(
    (user) =>
      (user.username === username || user.email === email) &&
      user.password === password
  );
  return user;
};

export default isSigned;

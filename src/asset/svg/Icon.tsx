import { OnClick } from "@coucoudas/ui";

const Menu = ({ onClick }: { onClick?: OnClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
  >
    <path d="M22 16.7368H9.36841V22H22V16.7368Z" fill="black" />
    <path d="M22 9.36865H9.36841V14.6318H22V9.36865Z" fill="black" />
    <path d="M22 2H9.36841V7.26316H22V2Z" fill="black" />
    <path d="M7.26316 2H2V7.26316H7.26316V2Z" fill="black" />
    <path d="M7.26316 9.36865H2V14.6318H7.26316V9.36865Z" fill="black" />
    <path d="M7.26316 16.7368H2V22H7.26316V16.7368Z" fill="black" />
  </svg>
);
const Search = ({ onClick }: { onClick?: OnClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M17.4 15.9001C18.5 14.5001 19.1 12.7001 19.1 11.0001C19.1 8.9001 18.3 6.9001 16.8 5.3001C13.7 2.2001 8.6 2.2001 5.5 5.3001C3.9 6.7001 3 8.7001 3 10.9001C3 13.0001 3.8 15.0001 5.3 16.6001C6.9 18.1001 8.9 18.9001 11 18.9001C12.9 18.9001 14.6 18.3001 15.9 17.2001L19.7 21.0001L21.1 19.6001L17.4 15.9001ZM15.2 15.1001C14.1 16.2001 12.6 16.9001 11 16.9001C9.4 16.9001 7.9 16.2001 6.8 15.1001C5.7 14.0001 5 12.5001 5 10.9001C5 9.3001 5.7 7.8001 6.7 6.7001C7.9 5.6001 9.5 4.9001 11 4.9001C12.6 4.9001 14.1 5.5001 15.2 6.7001C16.4 7.9001 17 9.4001 17 11.0001C17 12.6001 16.4 14.0001 15.2 15.1001Z"
      fill="black"
    />
  </svg>
);
const Home = ({ onClick }: { onClick?: OnClick }) => <div></div>;
const User = ({ onClick }: { onClick?: OnClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M9.99997 9.23077C12.5538 9.23077 14.6154 7.16923 14.6154 4.61538C14.6154 2.06154 12.5538 0 9.99997 0C7.44612 0 5.38458 2.06154 5.38458 4.61538C5.38458 7.16923 7.44612 9.23077 9.99997 9.23077Z"
      fill="black"
    />
    <path
      d="M19.2308 20.0001V18.4616C19.2308 14.2308 15.7692 10.7693 11.5385 10.7693H8.46153C4.23076 10.7693 0.769226 14.2308 0.769226 18.4616V20.0001H19.2308Z"
      fill="black"
    />
  </svg>
);
const Cart = ({ onClick }: { onClick?: OnClick }) => <></>;

const Jumun = ({ onClick }: { onClick?: OnClick }) => (
  <svg
    width="20"
    height="20"
    focusable="false"
    viewBox="0 0 20 20"
    aria-hidden="true"
    role="presentation"
    className="sc-kAzzGY jHDLvZ"
  >
    <path
      fill="#111111"
      fill-rule="nonzero"
      d="M20 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm-2 0H2v16h16V2zM8 5h8v2H8V5zM5 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 4h8v2H8V9zM5 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 4h8v2H8v-2zm-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
    ></path>
  </svg>
);

const Icon = {
  Menu,
  Search,
  Home,
  User,
  Cart,
  Jumun,
};

export default Icon;

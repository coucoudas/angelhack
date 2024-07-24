import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "./page";
import About from "./about";
import _404 from "./404";
import SignInPage from "./sign-in/page";
import SignUpPage from "./sign-up/page";
import FindUsername from "./find/username/page";
import FindPassword from "./find/password/page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/find">
          <Route path="username" element={<FindUsername />} />
          <Route path="password" element={<FindPassword />} />
        </Route>
        <Route path="*" element={<_404 />} />
      </Routes>
    </BrowserRouter>
  );
}

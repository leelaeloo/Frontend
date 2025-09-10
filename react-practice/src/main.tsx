import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import RootLayout from "./pages/layout.tsx"; // 전역 레이아웃 컴포넌트
import MingoMain from "./pages/mingomain"; // 메인 페이지
import Topic from "./pages/topic/index.tsx"; // 토픽 페이지
import SignUp from "./pages/sign-up"; // 회원가입 페이지
import SignIn from "./pages/sign-in"; // 로그인 페이지
import { ThemeProvider } from "./components/theme-provider.tsx";
import Create from "./pages/topic/create.tsx"; // 토픽 작성 페이지
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<MingoMain />} />
            <Route path="Topic" element={<Topic />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="topic/create" element={<Create />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);

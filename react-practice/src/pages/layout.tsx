import { AppFooter, AppHeader } from "../components/common";
import { Outlet } from "react-router";

// 레이아웃 관리
export default function RootLayout() {
  return (
    <div>
      <div className="page">
        <AppHeader />
        <div className="container pt-13">
          <Outlet />
        </div>
        <AppFooter />
      </div>
    </div>
  );
}

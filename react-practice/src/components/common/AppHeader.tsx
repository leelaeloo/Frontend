import { NavLink } from "react-router";
import { Separator } from "../ui/separator";

// 메인 Header
function AppHeader() {
  return (
    <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-[#1a1a1a]">
      <div className="w-full max-w-[1328px] flex items-center justify-between px-6 py-3">
        {/* 로고 & 네비게이션 메뉴 UI */}
        <div className="flex items-center gap-5">
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/assets/imgs/home.png" alt="@LOGO" className="w-6 h-6" />
            <div className="font-semibold">React Practice</div>
          </NavLink>
          <div className="flex items-center gap-5">
            <Separator orientation="vertical" className="!h-6" />
            <div className="font-semibold">주제1</div>
            <Separator orientation="vertical" className="!h-6" />
            <div className="font-semibold">주제2</div>
            <Separator orientation="vertical" className="!h-6" />
            <div className="font-semibold">주제3</div>
            <Separator orientation="vertical" className="!h-6" />
            <div className="font-semibold">주제4</div>
          </div>
        </div>
        {/* 로그인 UI */}
        <div className="text-xl font-semibold">
          <NavLink
            to={"sign-in"}
            className="md:text-base text-muted-foreground hover:text-white"
          >
            로그인
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export { AppHeader };

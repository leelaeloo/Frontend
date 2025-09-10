import { NavLink } from "react-router";
import { Separator } from "../ui/separator";

// 전체 Header
function AppHeader() {
  return (
    <header className="fixed top-0 z-20 w-full flex items-center justify-center bg-[#121212]">
      <div className="w-full max-w-[1328px] h-13 flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <NavLink to="/" className="flex items-center gap-5">
            <img
              src="/assets/imgs/mingo.svg"
              alt="img"
              width={"36"}
              height={"36"}
              className="cursor-pointer mt-[3px] -ml-1"
            />
          </NavLink>
          <div className="hidden lg:flex items-center gap-5">
            <div className="text-sm font-semibold text-white tracking-tighter">
              클래스
            </div>
            <div className="flex items-center gap-5">
              <div className="text-xm font-semibold text-white tracking-tighter">
                배움 노트
              </div>
              <Separator orientation="vertical" className="!h-4" />
              <NavLink to="Topic" className="flex items-center gap-5">
                <div className="text-xm font-semibold text-white tracking-tighter">
                  토픽 인사이트
                </div>
              </NavLink>
              <Separator orientation="vertical" className="!h-4" />
              <div className="text-xm font-semibold text-white tracking-tighter">
                밍랩
              </div>
              <div className="text-xm font-semibold text-white tracking-tighter">
                밍고 스테이지
              </div>
              <Separator orientation="vertical" className="!h-4" />
              <div className="text-xm font-semibold text-white tracking-tighter">
                밍고 스토어
              </div>
              <div className="text-xm font-semibold text-white tracking-tighter">
                밍거진
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <NavLink
            to="sign-in"
            className={({ isActive }) =>
              `text-sm font-semibold tracking-tighter hover:text-white ${
                isActive ? "!text-foreground" : "text-muted-foreground"
              }`
            }
          >
            로그인
          </NavLink>
          <Separator orientation="vertical" className="!h-3 mx-4" />
          <NavLink
            to="/"
            className="text-sm font-semibold tracking-tighter text-muted-foreground hover:!text-foreground"
          >
            우리가 하는 일
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export { AppHeader };

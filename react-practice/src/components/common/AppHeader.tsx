import { Separator } from "../ui/separator";

function AppHeader() {
  return (
    <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-[#212121]">
      <div className="w-full max-w-[1328px] flex items-center justify-between px-6 py-3">
        {/* 로고 & 네비게이션 메뉴 UI */}
        <div className="flex items-center gap-5">
          <img
            src="/public/assets/imgs/smile_dog.png"
            alt="@LOGO"
            className="w-6 h-6 cursor-pointer"
          />
          <div className="flex items-center gap-5">
            <div className="font-semibold">React Practice</div>
            <Separator orientation="vertical" className="!h-4" />
            <div className="font-semibold">주제1</div>
            <div className="font-semibold">주제2</div>
            <div className="font-semibold">주제3</div>
            <div className="font-semibold">주제4</div>
          </div>
        </div>
        {/* 로그인 UI */}
        <div className="font-semibold text-muted-foreground hover:text-white transition-all duration-500">
          로그인
        </div>
      </div>
    </header>
  );
}

export { AppHeader };

import { Separator } from "@/components/ui/separator";
import { Button } from "../ui";

// 메인 Footer
function AppFooter() {
  return (
    <footer className="w-full flex flex-col items-center justify-center bg-[#1a1a1a] text-white">
      <div className="w-full max-w-[1328px] flex flex-col gap-6 p-6 pb-20">
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start">
              <h3 className="scroll m-3 text-2xl font-semibold tracking-tight">
                리액트 연습
              </h3>
              <h3 className="scroll m-3 text-2xl font-semibold tracking-tight">
                리액트 연습
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/leelaeloo/Frontend.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="border-0 bg-transparent hover:bg-gray-700"
                >
                  <img
                    src="/assets/imgs/github.png"
                    alt="@GITHUB"
                    className="w-6 h-6 mt-[2px]"
                  />
                </Button>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">
              리액트 연습
            </p>
            <Separator orientation="vertical" className="!h-[14px]" />
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">
              리액트 연습
            </p>
            <Separator orientation="vertical" className="!h-[14px]" />
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">
              리액트 연습
            </p>
          </div>
        </div>
        <Separator className="bg-gray-700" />
        <div className="w-full flex items-start justify-between text-gray-400">
          <div className="flex flex-col justify-between min-h-[120px]">
            <div className="flex flex-col">
              <p className="text-base font-semibold mb-2 text-white">
                고객센터
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-sm leading-5">
                  평일 오전 9시부터 ~ 오후 6시
                </p>
                <p className="text-sm leading-5">문의 : memole454@naver.com</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              © Lee Lae Loo all rights reserved
            </p>
          </div>
          <div className="flex flex-col mr-[66px] min-h-[120px]">
            <p className="text-base font-semibold mb-2 text-white">
              사업자 정보
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-sm leading-5">제작자 : 이태수</p>
              <p className="text-sm leading-5">제작자 번호 : 010-1234-5678</p>
              <p className="text-sm leading-5">
                통신판매신고번호 : 2025-대한민국-0123
              </p>
              <p className="text-sm leading-5">
                주소 : 스나이퍼팩토리 마곡캠퍼스
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { AppFooter };

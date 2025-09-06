import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui";

function AppFooter() {
  return (
    <footer className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[1328px] flex flex-col gap-6 p-6 pb-18">
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start">
              <h3 className="scroll m-3 text-2xl font-semibold tracking-tight">
                나의 리액트 공부
              </h3>
              <h3 className="scroll m-3 text-2xl font-semibold tracking-tight">
                프론트엔드 개발자가 되보자!
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Button variant={"outline"} size={"icon"} className="border-0">
                <img
                  src="/public/assets/imgs/smile_dog.png"
                  alt="@SNS"
                  className="w-6 h-6 mt-[2px]"
                />
              </Button>
              <Button variant={"outline"} size={"icon"} className="border-0">
                <img
                  src="/public/assets/imgs/smile_dog.png"
                  alt="@YOUTUBE"
                  className="w-[22px] h-[22px]"
                />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3">
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
        <Separator />
        <div className="w-full flex items-start justify-between">
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col">
              <p className="h-10 text-base font-semibold">고객센터</p>
              <div className="flex flex-col items-start gap-1">
                <p>평일 오전 9시부터 ~ 오후 6시</p>
                <p>문의 : memole454@naver.com</p>
              </div>
            </div>
            <p>© Lee Lae Loo all rights reserved</p>
          </div>
          <div className="flex flex-col mr-[66px]">
            <p className="h-10 text-base font-semibold">사업자 정보</p>
            <div className="flex flex-col items-start gap-1">
              <p className="">제작자 : 이태수</p>
              <p className="">제작자 번호 : 010-1234-5678</p>
              <p className="">통신판매신고번호 : 2025-대한민국-0123</p>
              <p className="">주소 : 스나이퍼팩토리 마곡캠퍼스</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { AppFooter };

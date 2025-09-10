import { Avatar, AvatarImage, Card } from "../../ui";

// 토픽 페이지 'NEW 토픽 카드'
function CardNew6() {
  return (
    <Card className="bg-card text-card-foreground rounded-xl border shadow-sm w-full flex flex-col p-4 gap-4 cursor-pointer">
      <div className="w-full flex gap-4">
        <div className="flex-1 flex flex-col items-start gap-2">
          <div className="flex items-start gap-4">
            <img
              src="/assets/imgs/cardnew/cardnew6.png"
              alt="img"
              width={"120"}
              height={"120"}
              className="hidden sm:block aspect-square rounded-md object-cover"
            />
            <div className="flex-1 flex flex-col items-start gap-2">
              <h3 className="h-12 text-base font-semibold tracking-tight line-clamp-2">
                Atomic Design vs FSD, 프런트엔드 구조 설계의 길
              </h3>
              <p className="text-[13px] sm:text-sm line-clamp-3 text-muted-foreground">
                UI 구조 설계의 중요성 프런트엔드 개발에서 UI(UserInterface)는
                사용자 경험의 핵심이 되는 영역입니다. 하지만 UI를 잘 만든다는
                것은 단순이 예쁘게 구성하는
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-end justify-between">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center">
            <Avatar className="w-9 h-9 dark:bg-input/50">
              <AvatarImage
                src="/assets/imgs/boy2.png"
                alt="img"
                className="object-cover"
              />
            </Avatar>
          </div>
          <div className="flex flex-col">
            <div className="flex items-cneter gap-[2px] text-muted-foreground">
              <p className="text-sm font-semibold">IT 및 기술 분야</p>·
              <p className="text-sm font-semibold">소프트웨어 엔지니어</p>
            </div>
            <small className="text-sm font-semibold">개발자 9Diin</small>
          </div>
        </div>
      </div>
    </Card>
  );
}
export { CardNew6 };

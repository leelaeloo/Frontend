import { Avatar, AvatarImage, Card } from "../../ui";

// 토픽 페이지 'NEW 토픽 카드'
function CardNew4() {
  return (
    <Card className="bg-card text-card-foreground rounded-xl border shadow-sm w-full flex flex-col p-4 gap-4 cursor-pointer">
      <div className="w-full flex gap-4">
        <div className="flex-1 flex flex-col items-start gap-2">
          <div className="flex items-start gap-4">
            <img
              src="/assets/imgs/cardnew/cardnew4.png"
              alt="img"
              width={"120"}
              height={"120"}
              className="hidden sm:block aspect-square rounded-md object-cover"
            />
            <div className="flex-1 flex flex-col items-start gap-2">
              <h3 className="h-12 text-base font-semibold tracking-tight line-clamp-2">
                브랜드 확립에 반드시 필요한 컨셉, 기능보다 의미를 사는 시대
              </h3>
              <p className="text-[13px] sm:text-sm line-clamp-3 text-muted-foreground">
                사업가 뿐만 아니라 회사원에게도 상상을 언어화 시키는 힘은 반드시
                필요합니다. 자동화 시대를 너머 AI 시대가 도래함에 따라 모든
                사람에게 창의성을 요구하는 시대가
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
                src="/assets/imgs/avatar.png"
                alt="img"
                className="object-cover"
              />
            </Avatar>
          </div>
          <div className="flex flex-col">
            <div className="flex items-cneter gap-[2px] text-muted-foreground">
              <p className="text-sm font-semibold">IT 및 기술 분야</p>·
              <p className="text-sm font-semibold">교육·비즈니스</p>
            </div>
            <small className="text-sm font-semibold">밍고 Team</small>
          </div>
        </div>
      </div>
    </Card>
  );
}
export { CardNew4 };

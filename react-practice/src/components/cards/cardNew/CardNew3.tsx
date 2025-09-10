import { Avatar, AvatarImage, Card } from "../../ui";

// 토픽 페이지 'NEW 토픽 카드'
function CardNew3() {
  return (
    <Card className="bg-card text-card-foreground rounded-xl border shadow-sm w-full flex flex-col p-4 gap-4 cursor-pointer">
      <div className="w-full flex gap-4">
        <div className="flex-1 flex flex-col items-start gap-2">
          <div className="flex items-start gap-4">
            <img
              src="/assets/imgs/cardnew/cardnew3.png"
              alt="img"
              width={"120"}
              height={"120"}
              className="hidden sm:block aspect-square rounded-md object-cover"
            />
            <div className="flex-1 flex flex-col items-start gap-2">
              <h3 className="h-12 text-base font-semibold tracking-tight line-clamp-2">
                MVP를 빠르게 검증하기 위한 UI 전략, ShadcnUI가 가져다 주는
                기획자의 기민함
              </h3>
              <p className="text-[13px] sm:text-sm line-clamp-3 text-muted-foreground">
                스타트업 예비창업자, 초기창업자들이 겪는 가장 큰 어려움은? 모든
                스타트업 예비창업자와 초기창업자의 시작은 조그마한 아이디어
                입니다. 그리고 아이디어를
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
export { CardNew3 };

import { Avatar, AvatarImage, Card } from "../../ui";

// 토픽 페이지 'NEW 토픽 카드'
function CardNew8() {
  return (
    <Card className="bg-card text-card-foreground rounded-xl border shadow-sm w-full flex flex-col p-4 gap-4 cursor-pointer">
      <div className="w-full flex gap-4">
        <div className="flex-1 flex flex-col items-start gap-2">
          <div className="flex items-start gap-4">
            <img
              src="/assets/imgs/cardnew/cardnew8.png"
              alt="img"
              width={"120"}
              height={"120"}
              className="hidden sm:block aspect-square rounded-md object-cover"
            />
            <div className="flex-1 flex flex-col items-start gap-2">
              <h3 className="h-12 text-base font-semibold tracking-tight line-clamp-2">
                개발자도 브랜딩을 해야할까? 답은 YES!
              </h3>
              <p className="text-[13px] sm:text-sm line-clamp-3 text-muted-foreground">
                2021년 4월, 저는 웹 개발 시장에 첫 발을 내딛었습니다. 엄청난
                대의가 있어 이 일을 시작한 건 아니었습니다. COVID-19로 인해 제가
                전공한 관광업이 주저 앉아
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
export { CardNew8 };

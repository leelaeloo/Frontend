import { Avatar, AvatarImage, Card } from "../../ui";

// 토픽 페이지 'NEW 토픽 카드'
function CardNew5() {
  return (
    <Card className="bg-card text-card-foreground rounded-xl border shadow-sm w-full flex flex-col p-4 gap-4 cursor-pointer">
      <div className="w-full flex gap-4">
        <div className="flex-1 flex flex-col items-start gap-2">
          <div className="flex items-start gap-4">
            <img
              src="/assets/imgs/cardnew/cardnew5.png"
              alt="img"
              width={"120"}
              height={"120"}
              className="hidden sm:block aspect-square rounded-md object-cover"
            />
            <div className="flex-1 flex flex-col items-start gap-2">
              <h3 className="h-12 text-base font-semibold tracking-tight line-clamp-2">
                성공을 부르는 도미노: 작은 선택이 만드는 큰 변화
              </h3>
              <p className="text-[13px] sm:text-sm line-clamp-3 text-muted-foreground">
                최소한의 내 삶을 영위하기 위해 경제활동은 필수이다. 돈을 벌기
                위한 방법의 차이가 있을 뿐. 누구나 많은 돈을 벌고 싶어하지만,
                많은 일을 하고 싶어하진 않는다
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
export { CardNew5 };

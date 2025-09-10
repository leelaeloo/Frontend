import { Avatar, AvatarImage, Card } from "../../ui";

// 토픽 페이지 'NEW 토픽 카드'
function CardNew7() {
  return (
    <Card className="bg-card text-card-foreground rounded-xl border shadow-sm w-full flex flex-col p-4 gap-4 cursor-pointer">
      <div className="w-full flex gap-4">
        <div className="flex-1 flex flex-col items-start gap-2">
          <div className="flex items-start gap-4">
            <img
              src="/assets/imgs/cardnew/cardnew7.png"
              alt="img"
              width={"120"}
              height={"120"}
              className="hidden sm:block aspect-square rounded-md object-cover"
            />
            <div className="flex-1 flex flex-col items-start gap-2">
              <h3 className="h-12 text-base font-semibold tracking-tight line-clamp-2">
                '한번 더'가 만든 창업자의 정신력
              </h3>
              <p className="text-[13px] sm:text-sm line-clamp-3 text-muted-foreground">
                정체성 '한 번 더의 힘'이라는 책을 접한 건 유튜브 애플리케이션을
                서핑하다 우연히 발견한 한 영상 때문이었다. 그 영상 속 남자는
                자신의 하루는 72시간이라고
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
export { CardNew7 };

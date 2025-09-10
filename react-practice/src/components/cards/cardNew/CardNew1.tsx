import { Avatar, AvatarImage, Card } from "../../ui";

// 토픽 페이지 'NEW 토픽 카드'
function CardNew1() {
  return (
    <Card className="bg-card text-card-foreground rounded-xl border shadow-sm w-full flex flex-col p-4 gap-4 cursor-pointer">
      <div className="w-full flex gap-4">
        <div className="flex-1 flex flex-col items-start gap-2">
          <div className="flex items-start gap-4">
            <img
              src="/assets/imgs/cardnew/cardnew1.png"
              alt="img"
              width={"120"}
              height={"120"}
              className="hidden sm:block aspect-square rounded-md object-cover"
            />
            <div className="flex-1 flex flex-col items-start gap-2">
              <h3 className="h-12 text-base font-semibold tracking-tight line-clamp-2">
                사업을 한다는 것 vs 온라인 플랫폼을 만든다는 것
              </h3>
              <p className="text-[13px] sm:text-sm line-clamp-3 text-muted-foreground">
                2025년이 어드 덧 7월 중순을 향해 달려가고 있다. 2025년도 60%
                정도 흘렀다는걸 의미하겠지. 32년이란 세월을 살아오면서 가장
                주도적으로 그리고 주체적으로 살아가고 있음을 느끼는 요즘이다.
                그만큼 내 인생에서 올해가 중요한 한 해라는걸 의미하는 지도
                모른다. YouTube 강의 콘텐츠 기획 코딩 입문서 집필 마무리 타사 중
                최소 2가지는 매일 실행한다.
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
export { CardNew1 };

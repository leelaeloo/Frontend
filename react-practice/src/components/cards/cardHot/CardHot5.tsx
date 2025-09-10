import { Card } from "@/components/ui";

// 토픽 페이지 '핫 토픽 카드'
function CardHot5() {
  return (
    <div className="w-full min-w-58 flex flex-col gap-2 cursor-pointer">
      <Card
        className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm relative w-full h-72 bg-center bg-cover border-none"
        style={{
          backgroundImage: `url('/assets/imgs/cardnew/cardnew7.png')`,
        }}
      >
        <div className="absolute bottom-0 z-10 flex items-end justify-between p-4 gap-2">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight line-clamp-3">
            '한번 더'가 만든 창업자의 정신력
          </h3>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent rounded-b-xl"></div>
      </Card>
      <div className="w-full flex items-center gap-2">
        <div className="relative flex items-center">
          <span
            data-slot="avatar"
            className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-9 h-9 dark:bg-input/50"
          >
            <img
              data-solt="avatar-image"
              className="aspect-square size-full object-cover"
              alt="img"
              src="/assets/imgs/boy2.png"
            />
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-[2px] text-muted-foreground">
            <p className="text-xs tracking-tighter">IT 및 기술 분야 · </p>
            <p className="text-xs tracking-tighter">소프트웨어 엔지니어</p>
          </div>
          <small className="text-sm font-bold">개발자 9Diin</small>
        </div>
      </div>
    </div>
  );
}

export { CardHot5 };

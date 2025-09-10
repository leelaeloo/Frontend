import { Badge, Separator } from "@/components/ui";
import { ArrowDown, Heart } from "lucide-react";

// 메인 페이지 '실시간 인기 클래스 카드'
function CardClass1() {
  return (
    <div className="min-w-[240px] w-full flex flex-col items-start gap-2">
      <img
        src="/assets/imgs/jelly.png"
        alt="img"
        width={"302"}
        height={"170"}
        className="w-full aspect-video rounded-xl"
      />
      <div className="w-full flex items-center justify-start gap-2 mt-[2px]">
        <Badge
          variant={"outline"}
          className="text-muted-foreground font-semibold"
        >
          프로그래밍
        </Badge>
        <Badge
          variant={"outline"}
          className="text-muted-foreground font-semibold"
        >
          프런트엔드
        </Badge>
        <Separator orientation="vertical" className="!h-4" />
        <Badge
          variant={"outline"}
          className="text-muted-foreground font-semibold"
        >
          초급
        </Badge>
      </div>
      <p className="h-12 scroll-m-20 text-sm sm:text-base font-semibol tracking-tight line-clamp-2">
        백엔드의 새로운 패러다임. Nest.js 커뮤니티 서비스 만들기
      </p>
      <div className="w-full flex items-center justify-between mt-2">
        <div className="flex items-center text-sky-300">
          <ArrowDown className="h-4 w-4 mt-[1px]" />
          <p>25%</p>
          <p className="text-foreground text-sm sm:text-base mb-[2px] ml-3">
            79,000원
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Heart className="h-4 w-4 mt-[3px] text-red-400" />
          10
        </div>
      </div>
    </div>
  );
}

export { CardClass1 };

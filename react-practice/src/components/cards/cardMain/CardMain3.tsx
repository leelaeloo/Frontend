import { Card } from "@/components/ui";
import { HeartHandshake } from "lucide-react";

// 메인 페이지 상단 카드
function CardMain3() {
  return (
    <Card className="sm:min-w[240px] flex-shrink-0 flex flex-col justify-center items-start p-3 sm:p-6 sm:pt-5 rounded-md gap-3 coursor-pointer">
      <div className="flex items-center gap-2">
        <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 text-[#03C1BA]" />
        <span className="text-sm sm:text-lg font-semibold tracking-tight mb-[2px]">
          밍랩
        </span>
      </div>
      <div className="hidden sm:flex flex-col gap-2">
        <small className="text-sm font-semibold leading-none">
          나의 지식을 밍고들과 나누어
        </small>
        <small className="text-sm font-semibold leading-none">
          우리의 창작을 만들어보세요!
        </small>
      </div>
    </Card>
  );
}

export { CardMain3 };

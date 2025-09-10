import { Card } from "@/components/ui";
import { Store } from "lucide-react";

// 메인 페이지 상단 카드
function CardMain4() {
  return (
    <Card className="sm:min-w[240px] flex-shrink-0 flex flex-col justify-center items-start p-3 sm:p-6 sm:pt-5 rounded-md gap-3 coursor-pointer">
      <div className="flex items-center gap-2">
        <Store className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A85D1]" />
        <span className="text-sm sm:text-lg font-semibold tracking-tight mb-[2px]">
          스테이지
        </span>
      </div>
      <div className="hidden sm:flex flex-col gap-2">
        <small className="text-sm font-semibold leading-none">
          소개합니다. 우리의 반짝임!
        </small>
        <small className="text-sm font-semibold leading-none">
          밍고만의 소중한 결과를!
        </small>
      </div>
    </Card>
  );
}

export { CardMain4 };

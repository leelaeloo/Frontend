import { Card } from "@/components/ui";
import { BookOpenText } from "lucide-react";

// 메인 페이지 상단 카드
function CardMain5() {
  return (
    <Card className="sm:min-w[240px] flex-shrink-0 flex flex-col justify-center items-start p-3 sm:p-6 sm:pt-5 rounded-md gap-3 coursor-pointer">
      <div className="flex items-center gap-2">
        <BookOpenText className="w-4 h-4 sm:w-5 sm:h-5 text-[#a855f7]" />
        <span className="text-sm sm:text-lg font-semibold tracking-tight mb-[2px]">
          밍거진
        </span>
      </div>
      <div className="hidden sm:flex flex-col gap-2">
        <small className="text-sm font-semibold leading-none">
          특별하고 엄청난 성과를 이룬
        </small>
        <small className="text-sm font-semibold leading-none">
          밍고 스타들의 노하우!
        </small>
      </div>
    </Card>
  );
}

export { CardMain5 };

import { Card } from "@/components/ui";
import { School } from "lucide-react";

// 메인 페이지 상단 카드
function CardMain1() {
  return (
    <Card className="sm:min-w[240px] flex-shrink-0 flex flex-col justify-center items-start p-3 sm:p-6 sm:pt-5 rounded-md gap-3 coursor-pointer">
      <div className="flex items-center gap-2">
        <School className="w-4 h-4 sm:w-5 sm:h-5 text-[#EA4E43]" />
        <span className="text-sm sm:text-lg font-semibold tracking-tight mb-[2px]">
          클래스
        </span>
      </div>
      <div className="hidden sm:flex flex-col gap-2">
        <small className="text-sm font-semibold leading-none">
          배우고 싶은 교육이 있으신가요?
        </small>
        <small className="text-sm font-semibold leading-none">
          여러분의 열정을 더욱 탄탄하게!
        </small>
      </div>
    </Card>
  );
}

export { CardMain1 };

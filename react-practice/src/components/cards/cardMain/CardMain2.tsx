import { Card } from "@/components/ui";
import { Podcast } from "lucide-react";

// 메인 페이지 상단 카드
function CardMain2() {
  return (
    <Card className="sm:min-w[240px] flex-shrink-0 flex flex-col justify-center items-start p-3 sm:p-6 sm:pt-5 rounded-md gap-3 coursor-pointer">
      <div className="flex items-center gap-2">
        <Podcast className="w-4 h-4 sm:w-5 sm:h-5 text-[#FAA700]" />
        <span className="text-sm sm:text-lg font-semibold tracking-tight mb-[2px]">
          토픽 인사이트
        </span>
      </div>
      <div className="hidden sm:flex flex-col gap-2">
        <small className="text-sm font-semibold leading-none">
          잠재력이 듬뿍 담긴 아이디어를
        </small>
        <small className="text-sm font-semibold leading-none">
          나누며 소통하는 열린 공간
        </small>
      </div>
    </Card>
  );
}

export { CardMain2 };

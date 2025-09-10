import { useNavigate } from "react-router";
import { AppSidebar } from "@/components/common";
import {
  CardHot1,
  CardHot2,
  CardHot3,
  CardHot4,
  CardNew1,
  CardNew2,
  CardNew3,
  CardNew4,
  CardNew5,
  CardNew6,
  CardNew7,
  CardNew8,
} from "@/components/cards";
import { Button } from "@/components/ui";
import { PencilLine } from "lucide-react";

// 토픽 페이지
function Topic() {
  const navigate = useNavigate();
  return (
    <main className="relative w-full h-full flex items-start gap-6 p-4 sm:p-6">
      <div className="fixed right-1/2 bottom-10 translate-x-1/2 z-20 flex items-center gap-3 md:gap-4">
        <Button
          variant={"destructive"}
          onClick={() => navigate("Create")}
          className="h-9 px-4 py-2 has-[>svg]:px-3 w-50 md:py-6 md:text-base rounded-full font-semibold"
        >
          <PencilLine />
          토픽 작성하기
        </Button>
      </div>
      {/* 카테고리 & 사이드 바 */}
      <AppSidebar />
      {/* 내부 내용 */}
      <section className="flex-1 flex flex-col gap-10">
        {/* HOT 토픽 */}
        <div className="ml-3 w-full flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img
                src="/assets/gifs/gif-001.gif"
                alt="@GIF"
                className="w-7 h-7"
              />
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                핫 토픽
              </h4>
            </div>
            <p className="md:text-base text-muted-foreground">
              가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를
              얻어보세요.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <CardHot1 />
            <CardHot2 />
            <CardHot3 />
            <CardHot4 />
          </div>
        </div>
        {/* New 토픽 */}
        <div className="ml-3 w-full flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img
                src="/assets/gifs/gif-002.gif"
                alt="@PNG"
                className="w-7 h-7"
              />
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                NEW 토픽
              </h4>
            </div>
            <p className="md:text-base text-muted-foreground">
              새로운 시선으로, 새로운 이야기를 시작하세요. 지금 바로 당신만의
              토픽을 만들어보세요.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <CardNew1 />
            <CardNew2 />
            <CardNew3 />
            <CardNew4 />
            <CardNew5 />
            <CardNew6 />
            <CardNew7 />
            <CardNew8 />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Topic;

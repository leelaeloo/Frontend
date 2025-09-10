import {
  CardClass1,
  CardHot1,
  CardHot2,
  CardHot3,
  CardHot4,
  CardHot5,
  CardMain1,
  CardMain2,
  CardMain3,
  CardMain4,
  CardMain5,
} from "@/components/cards";
import { Button, Input, Separator } from "@/components/ui";
import { Search } from "lucide-react";

// 밍고 메인 페이지
function MingoMain() {
  return (
    <main className="w-full h-full flex flex-col items-center p-4 gap-12 sm:p-6 sm:gap-16">
      <section className="w-full flex-col flex items-center gap-6">
        <div className="w-full flex flex-col gap-6 lg:flex-row lg:gap-0 lg:items-end lg:justify-between lg:mt-10">
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
              나의 학습 여정이,
            </h3>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
              나만의 창작으로 이어지는 플랫폼
            </h3>
          </div>
          <div className="w-100 flex items-center gap-2">
            <Search
              className="min-w-5 text-muted-foreground"
              aria-hidden={"true"}
            />
            <Input placeholder="관심 있는 주제의 클래스 검색 하세요."></Input>
            <Button className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 hidden sm:block text-white">
              검색
            </Button>
          </div>
        </div>
        <div className="hidden w-full sm:flex items-center gap-6 overflow-auto">
          <CardMain1 />
          <CardMain2 />
          <CardMain3 />
          <CardMain4 />
          <CardMain5 />
        </div>
        <Separator orientation="vertical" className="-my-4 sm:hidden" />
      </section>
      <section className="w-full flex flex-col gap-6">
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
        <div className="flex items-center gap-4 sm:gap-6 overflow-auto">
          <CardHot1 />
          <CardHot2 />
          <CardHot3 />
          <CardHot4 />
          <CardHot5 />
        </div>
      </section>
      <section className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h4 className="text-lg sm:text-xl font-semibold tracking-tight">
            실시간 인기 클래스
          </h4>
          <p className="sm:text-base text-muted-foreground">
            현재 학습자들이 가장 많이 참여하고 있는 인기 클래스에요. 함께
            배워볼까요?
          </p>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 overflow-auto">
          <CardClass1 />
          <CardClass1 />
          <CardClass1 />
          <CardClass1 />
        </div>
      </section>
      <section className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h4 className="text-lg sm:text-xl font-semibold tracking-tight">
            신규 클래스
          </h4>
          <p className="sm:text-base text-muted-foreground">
            새롭게 오픈된 따끈따끈한 클래스들을 만나버세요. 지금 바로 시작할 수
            있어요!
          </p>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 overflow-auto">
          <CardClass1 />
          <CardClass1 />
          <CardClass1 />
          <CardClass1 />
        </div>
      </section>
    </main>
  );
}

export default MingoMain;

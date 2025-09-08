import { useNavigate } from "react-router";
import { AppSidebar } from "../components/common";
import { SkeletonTitle1, SkeletonTitle2 } from "../components/skeleton";
import { Button } from "../components/ui";
import { PencilLine } from "lucide-react";

// 메인 페이지
function App() {
  const navigate = useNavigate();
  return (
    <main className="w-full h-full min-h-[720px] flex p-6 gap-6">
      <div className="fixed right-1/2 bottom-10 translate-x-1/2 z-20 items-center">
        <Button
          variant={"outline"}
          onClick={() => navigate("topic1/create")}
          className="flex flex-wrap items-center gap-2 md:flex-row"
        >
          <PencilLine />
          테스트 페이지로 이동
        </Button>
      </div>
      {/* 카테고리 & 사이드 바 */}
      <AppSidebar />
      {/* 내부 내용 */}
      <section className="flex-1 flex flex-col gap-12">
        {/* Title1 */}
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img src="/assets/imgs/dog.png" alt="@PNG" className="w-7 h-7" />
              <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                제목1
              </h4>
            </div>
            <p className="md:text-base text-muted-foreground">
              내용을 적어주세요.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <SkeletonTitle1 />
            <SkeletonTitle1 />
            <SkeletonTitle1 />
            <SkeletonTitle1 />
          </div>
        </div>
        {/* Title2 */}
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img src="/assets/imgs/dog.png" alt="@PNG" className="w-7 h-7" />
              <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                제목2
              </h4>
            </div>
            <p className="md:text-base text-muted-foreground">
              내용을 적어주세요.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <SkeletonTitle2 />
            <SkeletonTitle2 />
            <SkeletonTitle2 />
            <SkeletonTitle2 />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

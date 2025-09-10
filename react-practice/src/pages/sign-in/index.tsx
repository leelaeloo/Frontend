import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";
import { NavLink } from "react-router";

// 경고 문구
const formSchema = z.object({
  email: z.email({
    error: "올바른 형식의 이메일 주소를 입력해주세요.",
  }),
  password: z.string().min(8, {
    error: "비밀번호는 최소 8자 이상이어야 합니다.",
  }),
});

// 로그인 페이지
export default function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    console.log("로그인 버튼 클릭");
  };

  return (
    <main className="w-full h-full flex flex-col items-center justify-start p-4 gap-4 sm:p-6 sm:gap-6">
      <div className="flex flex-col items-center">
        <h4 className="text-lg font-semibold mb-2">안녕하세요 👋🏻</h4>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-[2px]">
            <small className="text-base font-medium text-[#F96859]">밍고</small>
            <small className="text-sm text-muted-foreground">
              에 방문해주셔서 감사합니다.
            </small>
          </div>
          <p className="text-sm text-muted-foreground">
            서비스를 이용하려면 로그인을 진행해주세요.
          </p>
        </div>
      </div>
      <Card className="text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm w-full max-w-100 border-0 sm:border bg-transparent sm:bg-card">
        <CardHeader>
          <CardTitle className="font-semibold text-lg">로그인</CardTitle>
          <CardDescription className="text-muted-foreground text-xs">
            로그인을 위한 정보를 입력해주세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 px-0 sm:px-6">
          <div className="grid grid-cols-1 gap-3">
            <Button
              variant={"destructive"}
              type="button"
              className="!bg-[#03C75A] !hover:bg-[#03c75a] text-black font-bold"
            >
              <img
                src="/social/n.png"
                alt="네이버"
                width={"18"}
                height={"18"}
                className="mr-1"
              />
              네이버 로그인
            </Button>
            <Button
              variant={"destructive"}
              type="button"
              className="!bg-[#FEE500] !hover:bg-[#FEE500] text-black font-bold"
            >
              <img
                src="/social/talk.png"
                alt="네이버"
                width={"18"}
                height={"18"}
                className="mr-1"
              />
              카카오 로그인
            </Button>
            <Button type="button" variant={"secondary"} className="font-bold">
              <img
                src="/social/google.svg"
                alt="구글"
                width={"18"}
                height={"18"}
                className="mr-1"
              />
              구글 로그인
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 text-muted-foreground bg-black sm:bg-card">
                or continue with
              </span>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* 이메일 */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <FormLabel className="font-semibold">이메일</FormLabel>
                    </div>
                    <FormControl>
                      <Input placeholder="이메일을 입력하세요." {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* 비밀번호 */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <FormLabel className="font-semibold">비밀번호</FormLabel>
                      <NavLink
                        to="/forgot-password"
                        className="text-sm underline"
                      >
                        비밀번호를 잊으셨나요?
                      </NavLink>
                    </div>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* 로그인 버튼 */}
              <Button
                type="submit"
                variant={"destructive"}
                className="w-full bg-[#D14D4D] hover:bg-[#b63f3f] font-bold"
              >
                <span className="font-semibold">로그인</span>
              </Button>

              {/* 회원가입 */}
              <div className="text-center text-sm">
                계정이 없으신가요?
                <NavLink to="/sign-up" className="underline ml-2">
                  회원가입
                </NavLink>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
  Checkbox,
  Separator,
} from "@/components/ui";
import { NavLink } from "react-router";
import { ArrowLeft, Asterisk, ChevronRight } from "lucide-react";
// import { useState } from "react";

// 유효성 검사 규칙 정의
const formSchema = z
  .object({
    email: z.string().email({
      message: "올바른 형식의 이메일 주소를 입력해주세요.",
    }),
    password: z.string().min(8, {
      message: "비밀번호는 최소 8자 이상이어야 합니다.",
    }),
    confirmPassword: z.string().min(8, {
      message: "비밀번호를 재확인 해주세요",
    }),
    requiredTerms: z.boolean().refine((val) => val === true, {
      message: "필수 약관에 동의해주세요.",
    }),
    requiredPrivacy: z.boolean().refine((val) => val === true, {
      message: "개인정보 수집 및 이용에 동의해주세요.",
    }),
    optionalMarketing: z.boolean().optional(),
    optionalEvent: z.boolean().optional(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "비밀번호가 일치하지 않습니다.",
        path: ["confirmPassword"],
      });
    }
  });

// 회원가입 페이지
export default function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      requiredTerms: false,
      requiredPrivacy: false,
      optionalMarketing: false,
      optionalEvent: false,
    },
  });

  // const [serviceAgreed, setServiceAgreed] = useState<boolean>(false); // 서비스 이용약관 동의
  // const [privacyAgreed, setPrivacyAgreed] = useState<boolean>(false); // 개인정보 수집 및 이용동의
  // const [marketingAgreed, setMarketingAgreed] = useState<boolean>(false); // 마케팅 정보 수신 동의
  // const [eventAgreed, setEventAgreed] = useState<boolean>(false); // 이벤트 및 혜택 정보 수신 동의

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("회원가입 버튼 클릭", values);
  };

  return (
    <main className="w-full min-h-[720px] flex items-start justify-center p-6">
      <div className="w-full max-w-md flex flex-col px-6 gap-6 mt-10">
        <div className="flex flex-col items-center">
          <h4 className="text-xl font-semibold mb-4">회원가입</h4>
          <p className="text-muted-foreground">
            회원가입을 위한 정보를 입력해주세요.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input placeholder="이메일을 입력하세요." {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="비밀번호를 입력하세요."
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호 확인</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="비밀번호를 재입력 해주세요."
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              {/* 필수 동의 항목 */}
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  <Asterisk size={14} className="text-red-500" />
                  <Label>필수 동의 항목</Label>
                </div>

                <FormField
                  control={form.control}
                  name="requiredTerms"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            서비스 이용약관 동의
                          </FormLabel>
                        </div>
                        <Button variant="link" className="p-0 h-auto">
                          <span className="text-xs">자세히 보기</span>
                          <ChevronRight size={16} />
                        </Button>
                      </div>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="requiredPrivacy"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            개인정보 수집 및 이용동의
                          </FormLabel>
                        </div>
                        <Button variant="link" className="p-0 h-auto">
                          <span className="text-xs">자세히 보기</span>
                          <ChevronRight size={16} />
                        </Button>
                      </div>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <Separator />

              {/* 선택 동의 항목 */}
              <div className="space-y-3">
                <Label>선택 동의 항목</Label>

                <FormField
                  control={form.control}
                  name="optionalMarketing"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            마케팅 정보 수신 동의
                          </FormLabel>
                        </div>
                        <Button variant="link" className="p-0 h-auto">
                          <span className="text-xs">자세히 보기</span>
                          <ChevronRight size={16} />
                        </Button>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="optionalEvent"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            이벤트 및 혜택 정보 수신 동의
                          </FormLabel>
                        </div>
                        <Button variant="link" className="p-0 h-auto">
                          <span className="text-xs">자세히 보기</span>
                          <ChevronRight size={16} />
                        </Button>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <NavLink to="/sign-in">
                  <Button type="button" variant="outline" size="icon">
                    <ArrowLeft />
                  </Button>
                </NavLink>
                <Button
                  type="submit"
                  variant="outline"
                  className="flex-1 !bg-sky-800/50"
                >
                  회원가입
                </Button>
              </div>
              <div className="text-center text-sm">
                이미 계정이 있으신가요?
                <NavLink to="/sign-in" className="underline ml-2">
                  로그인
                </NavLink>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}

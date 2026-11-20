import { FormLogin } from "@/app/components/forms/FormLogin";
import { COOKIE } from "@/app/constantes/constantes";
import { checkInvalidEmail, checkInvalidPassword } from "@/app/libs/utils";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const PAGE_TITLE = "Login";

export const metadata: Metadata = {
  title: PAGE_TITLE,
};

export default function Login() {
  const handleLogin = async (_: string, formData: FormData) => {
    "use server";

    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) return "Fill all the fields.";

    if (checkInvalidEmail(email)) return "Invalid email.";

    if (checkInvalidPassword(password))
      return "The password must be six characters longer.";

    try {
      const body = {
        email,
        password,
      };

      const res = await fetch(`${process.env.BACK_END_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { token, message } = await res.json();

      if (!token) return message;

      const cookieStore = await cookies();
      cookieStore.set("token", token, COOKIE);
    } catch {
      console.log("handlerRegister error");
      return "An error occurred during registration.";
    }

    redirect("/tasks");
  };

  return (
    <>
      <h1 className="text-4xl text-center font-bold">Login</h1>
      <FormLogin action={handleLogin} />
      <Link className="text-center underline" href="/register">
        Don&apos;t have an account? Sing up
      </Link>
    </>
  );
}

import Link from "next/link";
import { FormRegister } from "../../components/forms/FormRegister";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Metadata } from "next";
import { checkInvalidEmail, checkInvalidPassword } from "@/app/libs/utils";
import { COOKIE } from "@/app/constantes/constantes";

const PAGE_TITLE = "Sing up";

export const metadata: Metadata = {
  title: PAGE_TITLE,
};

export default function SingUp() {
  const handleRegister = async (_: string, formData: FormData) => {
    "use server";
    const username = formData.get("username")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!username || !email || !password) return "Fill all the fields.";

    if (checkInvalidEmail(email)) return "Invalid email.";

    if (checkInvalidPassword(password))
      return "The password must be six characters longer.";

    try {
      const body = {
        username,
        email,
        password,
      };

      const res = await fetch(`${process.env.BACK_END_URL}/auth/register`, {
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
      <h1 className="text-4xl text-center font-bold">Create account</h1>
      <FormRegister action={handleRegister} />
      <Link className="text-center underline" href="/login">
        Already have an account? Sing in
      </Link>
    </>
  );
}

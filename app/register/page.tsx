import Link from "next/link";
import FormRegister from "../components/FormRegister";
import { redirect } from "next/navigation";

export default function SingUp() {
  const handleRegister = async (_: string, formData: FormData) => {
    "use server";
    const username = formData.get("username")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!username || !email || !password)
      return "Fill all the fields.";

    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      return "Invalid email.";
    
    if (password.length < 6)
      return "The password must be six characters longer.";

    try {
      const body = {
        username,
        email,
        password,
      };

      const res = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const {token, message} = await res.json();

      if (!token)
        return message;

      redirect("/");
    } catch {
      console.log("handlerRegister error");
      return "An error occurred during registration.";
    }
  };

  return (
    <div className="grid gap-y-4 px-8 min-w-100 py-12 bg-[#fdfcfc] rounded-3xl shadow-xl">
      <h1 className="text-4xl text-center font-bold">Create account</h1>
      <FormRegister action={handleRegister} />
      <Link className="text-center underline" href="/login">
        Already have an account? Sing in
      </Link>
    </div>
  );
}

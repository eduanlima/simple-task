import Link from "next/link";
import FormRegister from "../components/FormRegister";

export default function SingUp() {
  const handleRegister = async (formData) => {
    "use server";
    const userName = formData.get("username")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    const body = {
      userName,
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

    const register = await res.json();
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

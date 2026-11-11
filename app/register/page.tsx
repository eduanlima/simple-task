import Link from "next/link";
import FormRegister from "../components/FormRegister";

export default function SingUp() {
  return (
    <div className="grid gap-y-4 px-8 min-w-100 py-12 bg-[#fdfcfc] rounded-3xl shadow-xl">
      <h1 className="text-4xl text-center font-bold">Create account</h1>
      <FormRegister />
      <Link className="text-center underline" href="/login">
        Already have an account? Sing in
      </Link>
    </div>
  );
}

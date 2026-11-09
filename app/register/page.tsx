import Link from "next/link";

export default function SingUp() {
  return (
    <div className="grid gap-y-4">
      <h1 className="text-4xl">Sing up</h1>
      <div></div>
      <Link className="text-center underline" href="/login">Already have an account? Sing in</Link>
    </div>
  );
}

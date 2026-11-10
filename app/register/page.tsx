import Link from "next/link";

export default function SingUp() {
  return (
    <div className="grid gap-y-4 px-8 min-w-100 py-12 bg-[#fdfcfc] rounded-3xl shadow-xl">
      <h1 className="text-4xl text-center font-bold">Create account</h1>
      <form className="grid gap-y-6">
        <fieldset className="grid">
          <label className="text-[#7b7c7b]" htmlFor="username">
            User
          </label>
          <input
            className="px-2 py-1 text-[#7b7c7b] border border-[#e8e9e9] hover:border-[#b1b2b2] focus:border-[#b1b2b2] outline-none shadow-md rounded-lg"
            name="username"
          ></input>
        </fieldset>
        <fieldset className="grid">
          <label className="text-[#7b7c7b]" htmlFor="email">
            Email
          </label>
          <input
            className="px-2 py-1 text-[#7b7c7b] border border-[#e8e9e9] hover:border-[#b1b2b2] focus:border-[#b1b2b2] outline-none shadow-md rounded-lg"
            name="email"
          ></input>
        </fieldset>
        <fieldset className="grid">
          <label className="text-[#7b7c7b]" htmlFor="password">
            Password
          </label>
          <input
            className="px-2 py-1 text-[#7b7c7b] border border-[#e8e9e9] hover:border-[#b1b2b2] focus:border-[#b1b2b2] outline-none shadow-md rounded-lg"
            name="password"
          ></input>
        </fieldset>
        <button className="py-2 bg-[#141516] text-white shadow-md cursor-pointer hover:shadow-none rounded-lg">Sing in</button>
      </form>
      <div></div>
      <Link className="text-center underline" href="/login">
        Already have an account? Sing in
      </Link>
    </div>
  );
}

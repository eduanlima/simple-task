"use client";
import { useActionState, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FormInputText } from "./FormInputText";

export default function FormRegister({ action }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, formAction, isPending] = useActionState(action, "");

  return (
    <>
      {!isPending && errorMessage && (
        <p className="px-4 py-2 bg-red-400 text-white font-bold text-sm rounded-lg">
          {errorMessage}
        </p>
      )}
      <form className="grid gap-y-6" action={formAction}>
        <FormInputText
          id="username"
          label="User"
          value={username}
          setValue={setUsername}
        />
        <FormInputText
          id="email"
          label="Email"
          value={email}
          setValue={setEmail}
        />
        <fieldset className="grid">
          <label className="text-[#7b7c7b]" htmlFor="password">
            Password
          </label>
          <div className="relative flex items-center">
            <input
              className="w-full pl-2 pr-9 py-1 text-[#7b7c7b] border border-[#e8e9e9] hover:border-[#b1b2b2] focus:border-[#b1b2b2] outline-none shadow-md rounded-lg"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
            />
            <button
              className="cursor-pointer absolute right-2"
              type="button"
              onClick={() => setShowPassword((sp) => !sp)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </fieldset>
        <button className="py-2 bg-[#141516] text-white shadow-md cursor-pointer hover:shadow-none rounded-lg">
          Sing in
        </button>
      </form>
    </>
  );
}

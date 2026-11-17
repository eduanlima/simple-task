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
        <FormInputText
          id="password"
          label="Password"
          value={password}
          type="password"
          setValue={setPassword}
        />
        <button className="py-2 bg-[#141516] text-white shadow-md cursor-pointer hover:shadow-none rounded-lg">
          Sing in
        </button>
      </form>
    </>
  );
}

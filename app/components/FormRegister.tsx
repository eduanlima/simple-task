"use client";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function SingUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="grid gap-y-6">
      <fieldset className="grid">
        <label className="text-[#7b7c7b]" htmlFor="username">
          User
        </label>
        <input
          className="px-2 py-1 text-[#7b7c7b] border border-[#e8e9e9] hover:border-[#b1b2b2] focus:border-[#b1b2b2] outline-none shadow-md rounded-lg"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </fieldset>
      <fieldset className="grid">
        <label className="text-[#7b7c7b]" htmlFor="email">
          Email
        </label>
        <input
          className="px-2 py-1 text-[#7b7c7b] border border-[#e8e9e9] hover:border-[#b1b2b2] focus:border-[#b1b2b2] outline-none shadow-md rounded-lg"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>
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
  );
}

"use client";
import { FC, useActionState, useState } from "react";
import { FormInputText } from "./FormInputText";
import { FormButton } from "./FormButton";
import { FormError } from "./FormError";

type FormRegisterProps = {
  action: (_: string, formData: FormData) => Promise<string>;
};

export const FormRegister: FC<FormRegisterProps> = ({ action }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, formAction, isPending] = useActionState(action, "");

  return (
    <>
      {!isPending && <FormError message={errorMessage} />}
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
        <FormButton>Sing up</FormButton>
      </form>
    </>
  );
};

import { Dispatch, FC, InputHTMLAttributes, SetStateAction } from "react";

interface FormInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const FormInputText: FC<FormInputTextProps> = ({
  id,
  label,
  value,
  setValue,
  ...inputProps
}) => {
  <fieldset className="grid">
    <label className="text-[#7b7c7b]" htmlFor="username">
      {label}
    </label>
    <input
      className="px-2 py-1 text-[#7b7c7b] border border-[#e8e9e9] hover:border-[#b1b2b2] focus:border-[#b1b2b2] outline-none shadow-md rounded-lg"
      id={id}
      name={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...inputProps}
    />
  </fieldset>;
};

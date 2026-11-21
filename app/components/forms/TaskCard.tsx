import {
  Dispatch,
  FC,
  InputHTMLAttributes,
  SetStateAction,
  useState,
} from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

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
  const [showPassword, setShowPassword] = useState(false);
  const inputClassNameDefault = "px-2 py-1 text-[#7b7c7b] border border-[#e8e9e9] hover:border-[#b1b2b2] focus:border-[#b1b2b2] outline-none shadow-md rounded-lg";
  const inputClassNamePassword = inputProps.type === "password" ? "w-full pl-2 pr-9 py-1 text-[#7b7c7b] border border-[#e8e9e9] hover:border-[#b1b2b2] focus:border-[#b1b2b2] outline-none shadow-md rounded-lg" : "";
  const input = (
    <input
      className={`${inputClassNameDefault} ${inputClassNamePassword}`}
      id={id}
      name={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...inputProps}
      type={
        inputProps.type === "password" && showPassword
          ? "text"
          : inputProps.type
      }
    />
  );

  return (
    <fieldset className="grid">
      <label className="text-[#7b7c7b]" htmlFor={id}>
        {label}
      </label>
      {inputProps.type === "password" ? (
        <div className="relative flex items-center">
          {input}
          <button
            className="cursor-pointer absolute right-2"
            type="button"
            onClick={() => setShowPassword((sp) => !sp)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      ) : (
        input
      )}
    </fieldset>
  );
};

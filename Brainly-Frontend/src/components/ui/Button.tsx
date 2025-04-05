import { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantClasses = {
  primary: "bg-blue-800 text-white",
  secondary: "bg-blue-200 text-blue-800",
};

const defaultStyles =
  "rounded-xl flex items-center font-light px-4 py-2 cursor-pointer transition-opacity";

export function Button({
  variant,
  text,
  startIcon,
  fullWidth,
  loading,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} ${defaultStyles} ${
        fullWidth ? "w-full justify-center items-center" : ""
      } ${loading ? "opacity-45" : ""}`}
      disabled={loading}
    >
      {startIcon && <div className="pr-2">{startIcon}</div>}
      {text}
    </button>
  );
}

import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
  type?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = "text" }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className="px-4 py-2 border m-2 rounded-xl w-full"
        />
      </div>
    );
  }
);

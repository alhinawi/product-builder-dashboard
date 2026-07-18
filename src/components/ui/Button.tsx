import type { ReactNode } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit" | "w-auto";
}

const Button = ({ children, className, width = "w-full", ...rest }: Props) => {
  return (
    <button
      className={` ${width} p-2 rounded-lg text-white cursor-pointer ${className || ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

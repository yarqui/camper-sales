import { ButtonHTMLAttributes, FC, MouseEventHandler, ReactNode } from "react";

type Props = {
  type?: "submit" | "reset" | "button";
  children: ReactNode;
  onClick: MouseEventHandler;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({
  type = "button",
  children,
  onClick,
  className = "",
  ...otherProps
}: Props) => {
  const css = `tracking-tinyTighter rounded-full font-medium leading-6 focus:outline-0 transition-all duration-250 py-4 ${className}`;

  return (
    <button type={type} onClick={onClick} className={css} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;

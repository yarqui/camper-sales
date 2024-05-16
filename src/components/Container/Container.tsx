import { FC, ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};
const Container: FC<Props> = ({ className = "", children }) => {
  const css: string = `ml-auto mr-auto max-w-screen-1.5xl px-16 ${className}`;

  return <div className={css}>{children}</div>;
};

export default Container;

import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Section: FC<Props> = ({ children }) => {
  return <section className="flex flex-col pb-25 pt-16">{children}</section>;
};

export default Section;

// TODO: delete this component. It is too complex and doesn't provide any encapsulated universal logic
import { FC, HTMLAttributes, ReactNode, JSX, createElement } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type Props = {
  level: HeadingLevel;
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>;

const isValidHeadingLevel = (
  level: string,
): level is keyof JSX.IntrinsicElements => {
  return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(level);
};

const Heading: FC<Props> = ({
  level,
  className,
  children,
  ...otherAttributes
}) => {
  const HeadingLevel = `h${level}`;

  if (!isValidHeadingLevel(HeadingLevel)) {
    throw new Error(`${HeadingLevel} is not a valid heading level`);
  }

  return createElement(
    HeadingLevel,
    { className, ...otherAttributes },
    children,
  );
};

export default Heading;

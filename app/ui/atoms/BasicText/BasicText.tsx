import { FC } from "react";

type BasicTextVariant = "body" | "caption";

interface IBasicTextProps {
  variant?: BasicTextVariant;
  children: string | string[];
}

const BasicText: FC<Readonly<IBasicTextProps>> = ({
  variant = "body",
  children,
}) => {
  return <span>{children}</span>;
};

export default BasicText;

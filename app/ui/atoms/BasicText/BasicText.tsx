import { FC } from "react";

import styles from "./styles.module.css";

type BasicTextVariant = "body" | "caption";

interface IBasicTextProps {
  variant?: BasicTextVariant;
  children: string | string[];
}

const BasicText: FC<Readonly<IBasicTextProps>> = ({
  variant = "body",
  children,
}) => {
  return (
    <span className={(variant === "caption" && styles.caption) || ""}>
      {children}
    </span>
  );
};

export default BasicText;

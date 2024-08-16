import { FC } from "react";

import styles from "./styles.module.css";

type BasicTextVariant = "body" | "caption" | "header" | "strong";

interface IBasicTextProps {
  variant?: BasicTextVariant;
  children: string | string[];
}

const BasicText: FC<Readonly<IBasicTextProps>> = ({
  variant = "body",
  children,
}) => {
  return (
    <span className={`${styles.basicText} ${styles[variant]}`}>{children}</span>
  );
};

export default BasicText;

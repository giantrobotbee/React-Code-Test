import { FC } from "react";

import styles from "./styles.module.css";

type ChicletVariant = "success";

interface IChicletProps {
  variant: ChicletVariant;
  label: string;
}

const Chiclet: FC<Readonly<IChicletProps>> = ({ variant, label }) => {
  return (
    <span className={`${styles.chiclet} ${styles[variant]}`}>{label}</span>
  );
};

export default Chiclet;

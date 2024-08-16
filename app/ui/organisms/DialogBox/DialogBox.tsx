import { FC, ReactElement } from "react";
import { Dialog, DialogDescription } from "@ariakit/react";

import styles from "./styles.module.css";

interface IDialogBoxProps {
  children?: ReactElement;
  open?: boolean;
  onClose?: () => void;
}

const DialogBox: FC<Readonly<IDialogBoxProps>> = ({
  open = false,
  onClose = () => { },
  children,
}) => {
  return (
    <Dialog
      open={open}
      onClose={() => onClose()}
      className={styles.dialog}
      backdrop={<div className={styles.backdrop} />}
    >
      {children}
    </Dialog>
  );
};

export default DialogBox;

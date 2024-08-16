import { FC, useEffect, useState } from "react";
import { Button, DialogDismiss } from "@ariakit/react";

import BasicText from "@/app/ui/atoms/BasicText";
import DialogBox from "@/app/ui/organisms/DialogBox";

import styles from "./styles.module.css";

interface IDeliveryConfirmationModalProps {
  orderNumber?: string;
  open?: boolean;
  onClose?: () => void;
  onConfirm?: (orderNumber: string) => void;
}

const DeliveryConfirmationModal: FC<
  Readonly<IDeliveryConfirmationModalProps>
> = ({
  orderNumber = "",
  open = false,
  onClose = () => { },
  onConfirm = () => { },
}) => {
    /*
     * In the real world we'd be using a form library
     * like the one included in AriaKit but for this exercise I
     * figured it was overkill.
     */
    const [value, setValue] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
      if (value.length < orderNumber.length) {
        setIsValid(true);
        return;
      }

      if (value === orderNumber) {
        setIsValid(true);
        setIsActive(true);
      } else {
        setIsValid(false);
        setIsActive(false);
      }

      return () => { };
    }, [value]);

    return (
      <DialogBox
        open={open}
        onClose={() => {
          setValue("");
          setIsActive(false);
          setIsValid(true);
          onClose();
        }}
      >
        <div>
          <div>
            <BasicText>Confirm delivery for {`#${orderNumber}`}</BasicText>
            <BasicText>Enter the order number to confirm delivery</BasicText>
            <input
              className={styles.input}
              name="order-number"
              value={value}
              aria-invalid={!isValid}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </div>
          <div>
            <Button disabled={!isActive} onClick={() => onConfirm(orderNumber)}>
              Confirm delivery
            </Button>
            <DialogDismiss>Cancel</DialogDismiss>
          </div>
        </div>
      </DialogBox>
    );
  };

export default DeliveryConfirmationModal;
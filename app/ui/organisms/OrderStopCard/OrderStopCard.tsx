"use client";

import { FC } from "react";
import { Button } from "@ariakit/react";
import Icon from "feather-icons-react";

import BasicText from "@/app/ui/atoms/BasicText";

import styles from "./styles.module.css";
import Chiclet from "../../atoms/Chiclet";

interface IOrderStopCard {
  order: OrderInfo;
  onConfirmClick: (orderNumber: string) => void;
}

const OrderStopCard: FC<Readonly<IOrderStopCard>> = ({
  order,
  onConfirmClick = () => { },
}) => {
  const { orderNumber, orderConfirmed } = order;

  return (
    <div className={styles.orderStopCard}>
      <header>
        <div className={styles.headerText}>
          <BasicText>Order {`#${orderNumber}`}</BasicText>
          <BasicText variant="caption">Spliff Decision</BasicText>
        </div>
      </header>
      <main>
        <div className={styles.orderAction}>
          <Button
            onClick={() => onConfirmClick(orderNumber)}
            disabled={orderConfirmed}
          >
            <span className={styles.buttonText}>
              <Icon
                icon={orderConfirmed ? "check-circle" : "package"}
                size="16"
              />
              Confirm delivery
            </span>
            {orderConfirmed && <Chiclet variant="success" label="Confirmed" />}
          </Button>
        </div>
        <div className={styles.orderAction}>
          <Button>
            <span className={styles.buttonText}>
              <Icon icon="dollar-sign" size="16" />
              Record payment
            </span>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default OrderStopCard;

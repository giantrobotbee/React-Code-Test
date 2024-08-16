"use client";

import { FC } from "react";
import { Button } from "@ariakit/react";

import BasicText from "@/app/ui/atoms/BasicText";

import styles from "./styles.module.css";

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
          <Button onClick={() => onConfirmClick(orderNumber)}>
            Confirm delivery
          </Button>
        </div>
        <div className={styles.orderAction}>
          <Button>Record payment</Button>
        </div>
      </main>
    </div>
  );
};

export default OrderStopCard;

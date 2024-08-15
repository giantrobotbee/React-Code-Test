"use client";

import { FC } from "react";
import { Button } from "@ariakit/react";

import BasicText from "@/app/ui/atoms/BasicText";

interface IOrderStopCard {
  order: OrderInfo;
  onConfirmClick: (orderNumber: string) => void;
}

const OrderStopCard: FC<Readonly<IOrderStopCard>> = ({
  order,
  onConfirmClick = () => {},
}) => {
  const { orderNumber } = order;

  return (
    <div>
      <header>
        <div>
          <BasicText>Order {`#${orderNumber}`}</BasicText>
          <span>Spliff Decision</span>
        </div>
      </header>
      <main>
        <div>
          <Button onClick={() => onConfirmClick(orderNumber)}>
            Confirm delivery
          </Button>
        </div>
        <div>
          <Button>Record payment</Button>
        </div>
      </main>
    </div>
  );
};

export default OrderStopCard;

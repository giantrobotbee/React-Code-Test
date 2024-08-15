"use client";

import { FC, ReactNode, useState } from "react";
import { map } from "ramda";
import {
  Dialog,
  DialogDismiss,
  DialogDescription,
  useDialogStore,
} from "@ariakit/react";

import OrderStopCard from "@/app/ui/organisms/OrderStopCard";

import styles from "./styles.module.css";

interface IOrdersPageProps {
  orders: OrderInfo[];
}

const OrdersPage: FC<Readonly<IOrdersPageProps>> = ({ orders }) => {
  const [currentOrder, setCurrentOrder] = useState("");
  const dialog = useDialogStore();

  const onConfirmClick = (orderNumber: string) => {
    console.log("Order number: ", orderNumber);
    setCurrentOrder(orderNumber);
    dialog.toggle();
  };

  return (
    <div>
      {map<OrderInfo, ReactNode>((order) => {
        return (
          <OrderStopCard
            order={order}
            onConfirmClick={onConfirmClick}
            key={order.orderNumber}
          />
        );
      }, orders)}
      <Dialog
        store={dialog}
        className={styles.dialog}
        backdrop={<div className={styles.backdrop} />}
      >
        <DialogDescription>Order #{currentOrder}</DialogDescription>
        <DialogDismiss store={dialog}>Cancel</DialogDismiss>
      </Dialog>
    </div>
  );
};

export default OrdersPage;

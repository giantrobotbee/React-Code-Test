"use client";

import { FC, ReactNode, useState } from "react";
/*
 * No I do not _actually_ need to be using this
 * but I really like using it, so here it is.
 *
 * https://ramdajs.com/
 */
import { map, find, propEq, unionWith, eqBy, prop } from "ramda";

import DeliveryConfirmationModal from "@/app/ui/templates/DeliveryConfirmationModal";
import OrderStopCard from "@/app/ui/organisms/OrderStopCard";

import styles from "./styles.module.css";

interface IOrdersPageTemplateProps {
  orders: OrderInfo[];
}

const OrdersPageTemplate: FC<Readonly<IOrdersPageTemplateProps>> = ({
  orders,
}) => {
  const [currentOrder, setCurrentOrder] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [orderData, setOrderData] = useState(orders);

  console.log(orderData);

  const onConfirmClick = (orderNumber: string) => {
    setCurrentOrder(orderNumber);
    setDialogOpen(!dialogOpen);
  };

  const onOrderConfirm = (orderNumber: string) => {
    const order = find<OrderInfo>(
      propEq(orderNumber, "orderNumber"),
      orderData,
    );
    if (order) {
      setOrderData((od) =>
        /*
         * This probably looks very clever,
         * but I promise it's not. This is just a
         * terse way of doing this using Ramda.
         */
        unionWith(
          eqBy(prop("orderNumber")),
          [
            {
              orderNumber: order.orderNumber,
              orderConfirmed: true,
            },
          ],
          od,
        ),
      );
      setDialogOpen(false);
      setCurrentOrder("");
    }
  };

  const onCancelClick = () => {
    setCurrentOrder("");
    setDialogOpen(false);
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
      <DeliveryConfirmationModal
        orderNumber={currentOrder}
        open={dialogOpen}
        onClose={onCancelClick}
        onConfirm={onOrderConfirm}
      />
    </div>
  );
};

export default OrdersPageTemplate;

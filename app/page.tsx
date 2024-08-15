import { FC } from "react";

import OrdersPage from "@/app/ui/pages/OrdersPage";

interface IHomeProps { }

const Home: FC<Readonly<IHomeProps>> = () => {
  // Stub out order details.
  // This would come from an API or something
  const orders: OrderInfo[] = [
    {
      orderNumber: "123456",
    },
  ];

  return <OrdersPage orders={orders} />;
};

export default Home;

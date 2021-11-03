import { base_url } from "../../constants/urls";
import useRequestData from "../../Hooks/useRequestData";

const OrdersCard = () => {
  const orders = useRequestData([], `${base_url}/fourFoodA/orders/history`);

  console.log("teste card", orders);

  const showPastOrders = orders.orders?.map((order) => {
    return <p>{order && order.restaurantName}</p>;
  });

  return <div>{showPastOrders}</div>;
};

export default OrdersCard;

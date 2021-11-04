import Footer from "../../components/Footer/Footer";
import useGetProfile from "../../services/GetProfile";
import { base_url } from "../../constants/urls";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import AddressCard from "../../components/ProfileCard/AddressCard";
import OrdersCard from "../../components/ProfileCard/OrdersCard";
import useRequestData from "../../Hooks/useRequestData";

const Profile = () => {
  const [profile] = useGetProfile(
    { user: {} },
    `${base_url}/fourFoodA/profile`
  );

  const orders = useRequestData([], `${base_url}/fourFoodA/orders/history`);
  const showPastOrders = orders.orders?.map((order) => {
    return <OrdersCard key={order.createdAt} orders={order} />;
  });

  return (
    <div>
      <ProfileCard profile={profile.user} />
      <AddressCard profile={profile.user} />
      {showPastOrders}
      <Footer />
    </div>
  );
};

export default Profile;

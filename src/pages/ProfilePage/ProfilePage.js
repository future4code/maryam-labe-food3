import Footer from "../../components/Footer/Footer";
import useGetProfile from "../../services/GetProfile";
import { base_url } from "../../constants/urls";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import AddressCard from "../../components/ProfileCard/AddressCard";
import OrdersCard from "../../components/ProfileCard/OrdersCard";

const Profile = () => {
  const [profile] = useGetProfile(
    { user: {} },
    `${base_url}/fourFoodA/profile`
  );

  return (
    <div>
      <ProfileCard profile={profile.user} />
      <AddressCard profile={profile.user} />
      <OrdersCard />
      <Footer />
    </div>
  );
};

export default Profile;

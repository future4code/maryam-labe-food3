import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import useGetProfile from "../../services/GetProfile";
import { base_url } from "../../constants/urls";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import AddressCard from "../../components/ProfileCard/AddressCard";
import OrdersCard from "../../components/ProfileCard/OrdersCard";
import useRequestData from "../../Hooks/useRequestData";
import { GlobalContext } from '../../context/GlobalContext';
import { ScreenContainer, ContainerAddress, ContainerUser } from "./ProfilePageStyles";
import { primaryColor, secondaryColor } from '../../constants/colors';
import { Typography } from "@mui/material";
import editIcon from "../../assets/edit-icon.svg";

const Profile = () => {

  const { setHeaderName, setChangePage, setShowLine } = useContext(GlobalContext)

  setHeaderName('Meu Perfil')
  setChangePage(false)
  setShowLine(true)

  const [profile] = useGetProfile(
    { user: {} },
    `${base_url}/fourFoodA/profile`
  );

  const orders = useRequestData([], `${base_url}/fourFoodA/orders/history`);
  const showPastOrders = orders.orders?.map((order) => {
    return <OrdersCard key={order.createdAt} orders={order} />;
  });

  return (
    <ScreenContainer>
      <ContainerUser>
        <div>
          <Typography
            variant="body1"
            gutterBottom
            component="div">
            Nome usuário
          </Typography>
          <Typography
            sx={{ lineHeight: 1 }}
            variant="body1"
            gutterBottom
            component="div"
          >
            Rua Blablabla, 106
          </Typography>
          <Typography
            sx={{ lineHeight: 1 }}
            variant="body1"
            gutterBottom component="div"
          >
            000.000.000-00
          </Typography>
        </div>
        <div>
          <img src={editIcon} />
        </div>
      </ContainerUser>
      <ContainerAddress>
        <div>
          <Typography
            variant="body1"
            gutterBottom component="div"
            color={secondaryColor}>
            Endereço cadastrado
          </Typography>
          <Typography
            sx={{ lineHeight: 0.5 }}
            variant="body1"
            gutterBottom
            component="div">
            Rua Blablabla, 22
          </Typography>
        </div>
        <div>
          <img src={editIcon} />
        </div>
      </ContainerAddress>
    </ScreenContainer>
  );
};

export default Profile;

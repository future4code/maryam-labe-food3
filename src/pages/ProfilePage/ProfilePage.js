import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import useGetProfile from "../../services/GetProfile";
import { base_url } from "../../constants/urls";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import AddressCard from "../../components/ProfileCard/AddressCard";
import OrdersCard from "../../components/ProfileCard/OrdersCard";
import useRequestData from "../../Hooks/useRequestData";
import { GlobalContext } from '../../context/GlobalContext';
import { ScreenContainer, ContainerAddress, ContainerUser, SubtitleContainer } from "./ProfilePageStyles";
import { primaryColor, secondaryColor } from '../../constants/colors';
import { Typography, Divider } from "@mui/material";
import editIcon from "../../assets/edit-icon.svg";
import OrderHistoryCard from "../../components/OrderHistoryCard/OrderHistoryCard"

const Profile = () => {

  const order = {
    "totalPrice": 74.5,
    "restaurantName": "Habibs",
    "createdAt": 1628378579131,
    "expiresAt": 1628382179131
  }

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
    console.log("order", order)
    return <OrderHistoryCard key={order.createdAt} order={order} />;
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
      <SubtitleContainer>
        <Typography variant="subtitle1" gutterBottom component="div" sx={{ textAlign: 'left', m: 0, p: 0 }}>
          <strong>Histórico de pedidos</strong>
          <Divider fullWidth sx={{ border: 1 }}></Divider>
        </Typography>
      </SubtitleContainer>
      <OrderHistoryCard order={order} />
      {showPastOrders}
    </ScreenContainer>
  );
};

export default Profile;

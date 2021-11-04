import { goToEditAddress } from "../../routes/coordinator";
import { useHistory } from "react-router";
import {
  AddressContainer,
  ProfileButtonContainer,
} from "../../pages/ProfilePage/ProfilePageStyles";

const AddressCard = ({ profile }) => {
  const history = useHistory();
  return (
    <div>
      <AddressContainer>
        <p>Endereço Cadastrado:</p>
        <p>
          <b>{profile?.address}</b>
        </p>
      </AddressContainer>
      <ProfileButtonContainer>
        <button onClick={() => goToEditAddress(history)}>Editar</button>
      </ProfileButtonContainer>
    </div>
  );
};

export default AddressCard;

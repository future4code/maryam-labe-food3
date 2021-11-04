import React from "react";
import { goToCreateAddress } from "../../routes/coordinator";
import { useHistory } from "react-router";
import {
  AddressContainer,
  ProfileButtonContainer,
} from "../../pages/ProfilePage/ProfilePageStyles";

const AddressCard = ({ profile }) => {
  const history = useHistory();
  return (
    <div>
<<<<<<< HEAD
      <AddressContainer>
        <p>Endereço Cadastrado:</p>
        <p>
          <b>{profile?.address}</b>
        </p>
      </AddressContainer>
      <ProfileButtonContainer>
        <button onClick={() => goToEditAddress(history)}>Editar</button>
      </ProfileButtonContainer>
=======
      <div>{profile?.address}</div>
      <div>
        <button onClick={() => goToCreateAddress(history)}>Editar</button>
      </div>
>>>>>>> master
    </div>
  );
};

export default AddressCard;

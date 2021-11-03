import { goToEditAddress } from "../../routes/coordinator";
import { useHistory } from "react-router";

const AddressCard = ({ profile }) => {
  const history = useHistory();
  return (
    <div>
      <div>{profile?.address}</div>
      <div>
        <button onClick={() => goToEditAddress(history)}>Editar</button>
      </div>
    </div>
  );
};

export default AddressCard;

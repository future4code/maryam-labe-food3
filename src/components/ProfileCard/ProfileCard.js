import { useHistory } from "react-router";
import { goToEditProfile } from "../../routes/coordinator";

const ProfileCard = ({ profile }) => {
  const history = useHistory();
  return (
    <div>
      <div>
        {profile.name}
        {profile.email}
        {profile.cpf}
      </div>
      <div>
        <button onClick={() => goToEditProfile(history)}>Editar</button>
      </div>
    </div>
  );
};

export default ProfileCard;

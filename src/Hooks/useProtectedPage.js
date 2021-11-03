import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
// importar função de ir para login

const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      //adicionar função de ir para login
    }
  }, [history])
}

export default useProtectedPage;
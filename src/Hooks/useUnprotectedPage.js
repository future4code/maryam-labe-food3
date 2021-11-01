import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
// importar função de ir para o feed

const useUnprotectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // função de ir para o feed
    }
  }, [history])
}

export default useUnprotectedPage;
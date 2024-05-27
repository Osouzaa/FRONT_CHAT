import * as C from "./style";
import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export const HeaderControle = () => {
  const navigate = useNavigate();
  return (
    <C.Header>
      <img
        src={Logo}
        alt="Logotipo da empresa"
        onClick={() => navigate("/")}
        style={{cursor: "pointer"}}
      />
      <C.ContentList>
        <li onClick={() => navigate("/relatorio")}>Relatorios</li>
        <li onClick={() => navigate("/historico")}>Histórico</li>
        <C.ContentCircle>G</C.ContentCircle>
      </C.ContentList>
    </C.Header>
  );
};

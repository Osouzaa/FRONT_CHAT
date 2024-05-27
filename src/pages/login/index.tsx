import { useState } from "react";
import Robo from "../../assets/RobLail.svg";
import * as C from "./style";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [newLogin, setNewLogin] = useState({ usuario: "", senha: "" });
  const [feedback, setFeedback] = useState("");
  const [classFeed, setClassFeed] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setNewLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (newLogin.usuario === "" || newLogin.senha === "") {
      setFeedback("Preencha todos os campos");
      setClassFeed("Err");
      setTimeout(() => {
        setFeedback("");
        setClassFeed("");
      }, 2000);
      return;
    }
    setFeedback(`Seja bem vindo ${newLogin.usuario}`);

    setClassFeed("Great");
    setTimeout(() => {
      setFeedback("");
      setClassFeed("");
      navigate("/relatorio");
    }, 2000);
  };

  return (
    <C.Container>
      <Header />
      <C.FeedBack className={classFeed}>{feedback}</C.FeedBack>
      <C.ContentForm autoComplete="off" onSubmit={handleLogin}>
        <C.ContentLabel>
          Usuário
          <C.InputText
            type="text"
            name="usuario"
            placeholder="Digite seu usuário"
            value={newLogin.usuario}
            onChange={handleInputChange}
            autoCapitalize="off"
          />
        </C.ContentLabel>
        <C.ContentLabel>
          Senha
          <C.InputText
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            value={newLogin.senha}
            onChange={handleInputChange}
            autoCapitalize="off"
          />
        </C.ContentLabel>
        <C.ResetPassword>Esqueceu a senha?</C.ResetPassword>
        <C.ImageRobo src={Robo} alt="Imagem do Robo" />
        <C.ButtonLogin type="submit">Entrar</C.ButtonLogin>
      </C.ContentForm>
      <C.ImageRobo src={Robo} alt="Imagem do Robo" className="RoboTwo" />
    </C.Container>
  );
};

export { Login };

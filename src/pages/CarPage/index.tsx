import * as C from "./style";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import { TextField, InputAdornment, Button } from "@mui/material";
import { ChatBot } from "../../Chat";
import { useNavigate } from "react-router-dom";

export const CarPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <C.Header>
        <C.ItemHeader> Ínicio </C.ItemHeader>
        <C.ItemHeader> Empresa </C.ItemHeader>
        <C.ItemHeader> Fale Conosco </C.ItemHeader>
        <C.ItemHeader onClick={() => navigate("/login")}> Admin</C.ItemHeader>
      </C.Header>

      <C.Container>
        <div>
          <C.ContainerOne>
            <C.ContentName>
              <h3> UNO MILLE 1.0 FIRE/ F. FLEX/ ECONOMY 4P </h3>
              <span> Veículo popular !!!</span>
            </C.ContentName>
            <C.ContentImage>
              <img
                src="https://image1.mobiauto.com.br/images/api/images/v1.0/353228287/transform/fl_progressive,f_webp,q_70,w_600"
                alt=""
              />
            </C.ContentImage>
          </C.ContainerOne>
        </div>
        <C.ContainerTwo>
          <C.ContentItem>
            <span>R$ 30.000,00</span>
            <p>Valor: R$ 25.000,00</p>
          </C.ContentItem>
          <C.ContentForm>
            <C.TextP> Tem interesse? </C.TextP>
            <C.SpanText>
              Envie uma mensagem{" "}
              <EmailIcon sx={{ color: "#b10509", fontSize: "16px" }} />
            </C.SpanText>
            <TextField
              placeholder="Nome"
              style={{ marginBottom: "1em" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <TextField
              placeholder="Email"
              style={{ marginBottom: "1em" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <TextField
              placeholder="Telefone"
              style={{ marginBottom: "1em" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#9d18e1",
                color: "#fff",
                marginTop: "1em",
              }}
            >
              Enviar
            </Button>
          </C.ContentForm>
        </C.ContainerTwo>
      </C.Container>
      <ChatBot />
    </>
  );
};

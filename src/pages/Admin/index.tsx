import { useEffect, useState } from "react";
import * as C from "./style";

import Robo from "../../assets/RobLail.svg";
import { HeaderControle } from "../../components/HeaderControle";
import { useParams } from "react-router-dom";
import axios from "axios";

interface ClientData {
  id: number;
  name: string;
  cpf: string;
  modelo: string;
  telefone: string;
  financiamento: string;
  troca: string;
  createdAt: string;
  updatedAt: string;
}

interface Message {
  text: string;
  sender: "user" | "bot";
}

export const Admin = () => {
  const { id } = useParams();
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_CLIENT}/${id}`);
        setClientData(response.data);
        constructConversation(response.data);
        setLoading(false);
      } catch (error) {
        setError("Erro ao carregar dados do cliente");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const constructConversation = (clientData: ClientData) => {
    const initialMessages: Message[] = [
      { text: "Antes de começarmos, poderia me dizer o seu nome completo?", sender: "bot" },
      { text: `${clientData.name}`, sender: "user" },
      { text: "Para continuar, preciso do seu CPF, por favor.", sender: "bot" },
      { text: `${clientData.cpf}`, sender: "user" },
      { text: "Qual é o seu número de telefone para que possamos entrar em contato?", sender: "bot" },
      { text: `${clientData.telefone}`, sender: "user" },
      { text: "Você gostaria de financiar o veículo? Se sim, em quantas parcelas?", sender: "bot" },
      { text: `${clientData.financiamento}`, sender: "user" },
      { text: "Você tem um veículo para troca? Se sim, qual é o veículo?", sender: "bot" },
      { text: `${clientData.troca}`, sender: "user" }
    ];
    setMessages(initialMessages);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <HeaderControle />
      <C.ContentTitle>Conversas </C.ContentTitle>
      <C.ImageRobo src={Robo} alt="Logotipo Robo" className="left" />
      <C.ImageRobo src={Robo} alt="Logotipo Robo" className="right" />

      <C.ContentConversa>
        <C.HeaderConversa>
          {clientData && (
            <>
              <p>{clientData.name}</p>
              <p>{clientData.telefone}</p>
            </>
          )}
        </C.HeaderConversa>

        <C.MessagesContainer>
          {messages.map((msg, index) => (
            <C.Message key={index} sender={msg.sender}>
              {msg.text}
            </C.Message>
          ))}
        </C.MessagesContainer>
      </C.ContentConversa>
    </>
  );
};

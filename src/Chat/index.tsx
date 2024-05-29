import React, {
  useState,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
} from "react";
import Robo from "../assets/RobLail.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputMask from "react-input-mask";
import * as C from "./style";
import axios from "axios";

enum ChatStep {
  Initial = "initial",
  InProgress = "inProgress",
  Completed = "completed",
}

interface Message {
  text: string;
  sender: "user" | "bot";
}

const questions = [
  "Antes de começarmos, poderia me dizer o seu nome completo?",
  "Para continuar, preciso do seu CPF, por favor.",
  "Qual é o seu número de telefone para que possamos entrar em contato?",
  "Você gostaria de financiar o veículo? Se sim, em quantas parcelas?",
  "Você tem um veículo para troca? Se sim, qual é o veiculo?",
];

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userResponses, setUserResponses] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [step, setStep] = useState<ChatStep>(ChatStep.Initial);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [openChat, setOpenChat] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (input.trim() !== "") {
      const newUserResponses = [...userResponses, input];
      setUserResponses(newUserResponses);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "user" },
      ]);
      setInput("");
      handleStep(newUserResponses);
    }
  };

  const handleStep = async (newUserResponses: string[]) => {
    if (step === ChatStep.Initial && input.toLowerCase() === "sim") {
      setStep(ChatStep.InProgress);
      await delay(1000);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: questions[questionIndex], sender: "bot" },
      ]);
      setQuestionIndex(questionIndex + 1);
    } else if (step === ChatStep.InProgress) {
      if (questionIndex < questions.length) {
        await delay(1000);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: questions[questionIndex], sender: "bot" },
        ]);
        setQuestionIndex(questionIndex + 1);
      } else {
        setStep(ChatStep.Completed);
        await delay(1000);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Vamos estar enviando seu contato para nossos atendentes e em até 10 minutos você será chamado no WhatsApp.",
            sender: "bot",
          },
        ]);
        saveData(newUserResponses);
      }
    }
  };

  const saveData = (responses: string[]) => {
    const [name, cpf, telefone, financiamento, troca] = responses;
    const userData = {
      name,
      cpf,
      telefone,
      modelo: "UNO MILLE 1.0 FIRE/ F. FLEX/ ECONOMY 4P",
      financiamento,
      troca,
    };
    axios.post(`${import.meta.env.VITE_CLIENT}`, userData);
  };

  const handleOptionClick = (option: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: option, sender: "user" },
    ]);
    if (option.toLowerCase() === "sim") {
      setStep(ChatStep.InProgress);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: questions[questionIndex], sender: "bot" },
        ]);
        setQuestionIndex(questionIndex + 1);
      }, 1000);
    }
  };

  const handleOpenChat = () => {
    setOpenChat(!openChat);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    setMessages([
      {
        text: "Olá, me chamo Lail. Percebi que esta interessado no UNO MILLE 1.0 FIRE/ F. FLEX/ ECONOMY 4P.",
        sender: "bot",
      },
      {
        text: "Vamos conversar, sobre o processo de venda? (Sim/Não)",
        sender: "bot",
      },
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <C.Container className={!openChat ? "" : "closeChat"}>
      <C.HeaderChat>
        <img
          src={Robo}
          alt=""
          onClick={handleOpenChat}
          className={!openChat ? "openChat" : ""}
        />
        <C.ContentTitle>
          <C.TitleHeader>CHATBOY LABILAL</C.TitleHeader>
          <KeyboardArrowDownIcon
            fontSize="large"
            style={{
              color: "#FFF",
              cursor: "pointer",
              transform: openChat ? "rotate(0deg)" : "rotate(180deg)",
            }}
            onClick={handleOpenChat}
          />
        </C.ContentTitle>
      </C.HeaderChat>
      <C.ContentMessage>
        {messages.map((msg, index) => (
          <C.Message key={index} sender={msg.sender}>
            {msg.text}
          </C.Message>
        ))}
        <div ref={messagesEndRef} />
      </C.ContentMessage>
      {step === ChatStep.Initial ? (
        <C.OptionsContainer>
          <C.OptionButton onClick={() => handleOptionClick("Sim")}>
            Sim
          </C.OptionButton>
          <C.OptionButton
            onClick={() => handleOptionClick("Não")}
            className="Not"
          >
            Não
          </C.OptionButton>
        </C.OptionsContainer>
      ) : (
        <C.InputContainer>
          <C.InputContainer>
            {questionIndex === 2 ? (
              <InputMask
                mask="999.999.999-99"
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                maskChar="_"
              >
                {
                  // @ts-ignore
                  (inputProps: any) => (
                    <C.Input
                      type="text"
                      placeholder="Digite seu CPF"
                      {...inputProps}
                    />
                  )
                }
              </InputMask>
            ) : questionIndex === 3 ? (
              // @ts-ignore
              <InputMask
                mask="(99) 99999-9999"
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                maskChar="_"
              >
                {
                  // @ts-ignore
                  (inputProps: any) => (
                    <C.Input
                      type="text"
                      placeholder="Digite seu telefone"
                      {...inputProps}
                    />
                  )
                }
              </InputMask>
            ) : (
              <C.Input
                type="text"
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Digite sua mensagem"
              />
            )}
          </C.InputContainer>
          <C.Button onClick={sendMessage}>Enviar</C.Button>
        </C.InputContainer>
      )}
    </C.Container>
  );
};

export { ChatBot };

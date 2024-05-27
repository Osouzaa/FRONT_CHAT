
import { Table, TableBody, TableRow } from "@mui/material";
import * as C from "./style";
import { HeaderControle } from "../../components/HeaderControle";
import Robo from "../../assets/RobLail.svg";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

interface Cliente {
  id: number;
  name: string;
  cpf: string;
  telefone: string;
  modelo: string;
  financiamento: string;
  troca: string;
  status: string | null;
  createdAt: string;
  updatedAt: string;
  concluido: string; // Corrigi o typo do nome da propriedade
}

const Historico = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get<Cliente[]>(
        `${import.meta.env.VITE_CLIENT}`
      );
      setClientes(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleBack = (id: number) => {
    navigate(`/conversas/${id}`);
  };

  return (
    <>
      <HeaderControle />
      <C.ContentTitle>Histórico</C.ContentTitle>
      <C.ContentTable>
        <Table>
          <C.StyledTableHead>
            <TableRow>
              <C.StyleItem>Inicio da conversa</C.StyleItem>
              <C.StyleItem>Cliente</C.StyleItem>
              <C.StyleItem>Ultima Atualização</C.StyleItem>
              <C.StyleItem>Abrir Conversa</C.StyleItem>
            </TableRow>
          </C.StyledTableHead>
          <TableBody>
            {clientes.map((row) => (
              <TableRow key={row.id}>
                <C.LinhaStyle>
                  {format(new Date(row.createdAt), "dd/MM/yyyy")}
                </C.LinhaStyle>
                <C.LinhaStyle>{row.name}</C.LinhaStyle>
                <C.LinhaStyle>
                  {format(new Date(row.updatedAt), "dd/MM/yyyy")}
                </C.LinhaStyle>
                <C.LinhaStyle>
                  <button onClick={() => handleBack(row.id)}>
                    Ver Conversa
                  </button>
                </C.LinhaStyle>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </C.ContentTable>
      <C.ImageRobo src={Robo} alt="Logotipo Robo" className="left" />
      <C.ImageRobo src={Robo} alt="Logotipo Robo" className="right" />
    </>
  );
};

export { Historico };

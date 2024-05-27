import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { format } from "date-fns";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Table, TableBody, TableRow } from "@mui/material";
import * as C from "./style";
import { HeaderControle } from "../../components/HeaderControle";
import Robo from "../../assets/RobLail.svg";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { useNavigate } from "react-router-dom";
import { ModalEdit } from "../../components/modalEdit";
import * as XLSX from "xlsx";

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

const Relatorios = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [clientID, setClientID] = useState<number | undefined>();

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get<Cliente[]>(
        "http://localhost:3001/v1/client"
      );
      setClientes(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChat = (id: number) => {
    navigate(`/conversas/${id}`);
  };

  const handleEdit = (id: number) => {
    setClientID(id);
    setShowEdit(true);
  };

  const closeModal = () => {
    setShowEdit(false);
    fetchData();
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(clientes);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Clientes");
    XLSX.writeFile(workbook, "clientes.xlsx");
  };

  return (
    <>
      <HeaderControle />
      <C.ContentTitle>Relatórios</C.ContentTitle>
      <C.ContentTable>
        <Table>
          <C.StyledTableHead>
            <TableRow>
              <C.StyleItem>Data</C.StyleItem>
              <C.StyleItem>Cliente</C.StyleItem>
              <C.StyleItem>Status</C.StyleItem>
              <C.StyleItem></C.StyleItem>
              <C.StyleItem>Abrir Conversa</C.StyleItem>
              <C.StyleItem>Editar</C.StyleItem>
            </TableRow>
          </C.StyledTableHead>
          <TableBody>
            {clientes.map((cliente) => (
              <TableRow key={cliente.id}>
                <C.LinhaStyle>
                  {format(new Date(cliente.createdAt), "dd/MM/yyyy")}
                </C.LinhaStyle>
                <C.LinhaStyle>{cliente.name}</C.LinhaStyle>
                <C.LinhaStyle>{cliente.status}</C.LinhaStyle>
                <C.LinhaStyle>
                  {cliente.status === "Vendido" && (
                    <CheckIcon sx={{ color: "#3e8e41" }} fontSize="large" />
                  )}
                  {cliente.status === "Em Andamento" && (
                    <HourglassEmptyIcon
                      style={{ color: "#ffca18" }}
                      fontSize="large"
                    />
                  )}
                  {cliente.status === "Interrompido" && (
                    <PriorityHighIcon
                      sx={{ color: "#F75A68" }}
                      fontSize="large"
                    />
                  )}
                </C.LinhaStyle>
                <C.LinhaStyle>
                  <button onClick={() => handleChat(cliente.id)}>Ver</button>
                </C.LinhaStyle>
                <C.LinhaStyle>
                  <EditIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEdit(cliente.id)}
                  />
                </C.LinhaStyle>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <C.ContentCSV>
          <SaveAltIcon />
          <p onClick={exportToExcel}>Download .csv</p>
        </C.ContentCSV>
      </C.ContentTable>
      <C.ImageRobo src={Robo} alt="Logotipo Robo" className="left" />
      <C.ImageRobo src={Robo} alt="Logotipo Robo" className="right" />
      {showEdit && <ModalEdit id={clientID} toggleModal={closeModal} />}
    </>
  );
};

export default Relatorios;

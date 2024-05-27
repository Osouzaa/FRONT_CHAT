import {
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormLabel,
} from "@mui/material";
import * as C from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

interface IModalEdit {
  id: number | undefined;
  toggleModal: () => void;
}

export const ModalEdit = ({ id, toggleModal }: IModalEdit) => {
  const [formData, setFormData] = useState({
    concluido: "",
    cpf: "",
    name: "",
    status: "",
    telefone: "",
    troca: "",
  });

  const statusOptions = [
    { label: "Vendido", value: "Vendido" },
    { label: "Em Andamento", value: "Em Andamento" },
    { label: "Interrompido", value: "Interrompido" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_CLIENT}/${id}`
        );
        const data = response.data;

        // Ensure no field is null
        for (let key in data) {
          if (data[key] === null) {
            data[key] = "";
          }
        }

        setFormData(data);
      } catch (err) {
        console.log(err);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: any } }
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, status: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.patch(
        `${import.meta.env.VITE_CLIENT}/${id}`,
        formData
      );
      toggleModal(); // Close the modal after successful update
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <C.ModalBG>
      <C.ContainerModal>
        <C.Header>
          <C.ContentTitle>Editar Informações</C.ContentTitle>
          <button onClick={toggleModal}> X </button>
        </C.Header>
        <C.ContentForm onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ width: "90%" }}
          />
          <TextField
            label="CPF"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            sx={{ width: "90%" }}
          />
          <TextField
            label="Telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            sx={{ width: "90%" }}
          />
          <TextField
            label="Troca"
            name="troca"
            value={formData.troca}
            onChange={handleChange}
            sx={{ width: "90%" }}
          />
          <FormControl component="fieldset" sx={{ width: "90%" }}>
            <FormLabel component="legend">Status</FormLabel>
  
              {statusOptions.map((option) => (
                <FormControlLabel
                  key={option.value}
                  control={
                    <Checkbox
                      checked={formData.status === option.value}
                      onChange={handleCheckboxChange}
                      value={option.value}
                      name="status"
                    />
                  }
                  label={option.label}
                />
              ))}
          </FormControl>
          <C.ContentButton>
            <button type="submit">Editar</button>
          </C.ContentButton>
        </C.ContentForm>
      </C.ContainerModal>
    </C.ModalBG>
  );
};

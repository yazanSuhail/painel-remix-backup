import { ChangeEvent, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "@remix-run/react";
import Alert from "~/components/Alert";
import { GridColDef } from "@mui/x-data-grid";
import FoldersDropDownButton from "../FoldersDropDownButton";
import { MarkEmailRead } from "@mui/icons-material";
import { TextField } from "@mui/material";
import data from "~/Mocks/EmailList.json";
import * as S from "./styles";
import DataGridTable from "../DataGridTable";

import { download } from "~/assets/Icons";

function EmailList({ title, data }: any) {
  const searchParams = useSearchParams();
  const email = searchParams[0].get("email");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [selectedCell, setSelectedCell] = useState("");

  const handleDownloadClick = (email: string) => {
    setSelectedCell(email);
  };

  const handleCellClick = (params: { row: { email: string } }) => {
    const email = params.row.email;
    setSelectedCell(email);
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 60,
      disableColumnMenu: true,
    },
    {
      field: "from",
      headerName: "De",
      width: 260,
      disableColumnMenu: true,
    },
    {
      field: "to",
      headerName: "Para",
      width: 260,
      disableColumnMenu: true,
    },
    {
      field: "subject",
      headerName: "Assunto",
      width: 500,
      disableColumnMenu: true,
    },
    {
      field: "date",
      headerName: "Data",
      width: 110,
      disableColumnMenu: true,
    },
    {
      field: "downloade",
      headerName: "Baixar",
      width: 110,
      disableColumnMenu: true,
    },
  ];

  const handleButtonClick = () => {
    console.log(searchInputValue);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };

  const foldersList = [
    "Caixa de entrada (234)",
    "Quarentena (12)",
    "Enviados (53)",
    "Rascunho (7)",
    "Lixeira (125)",
    "Pasta (57)",
    "Pasta teste (9)",
  ];

  const [selectedFolder, setSelectedFolder] = useState(foldersList[0]);

  return (
    <>
      <S.Title>{title}</S.Title>
      <div>{selectedFolder}</div>
      <S.BtnContainer>
        <FoldersDropDownButton
          foldersList={foldersList}
          selectedFolder={selectedFolder}
          setSelectedFolder={setSelectedFolder}
        />
      </S.BtnContainer>

      <S.ContentContainer>
        <S.Email>Conta: {email}</S.Email>

        <S.SearchContainer>
          <TextField
            id="outlined-multiline-flexible"
            label="Buscar e-mail"
            multiline
            maxRows={10}
            fullWidth
            InputProps={{
              style: { height: "50px" },
            }}
            value={searchInputValue}
            onChange={handleInputChange}
          />
          <S.SearchButton onClick={handleButtonClick} />
        </S.SearchContainer>
        <S.ContentContainer>
          <DataGridTable
            data={data}
            columns={columns}
            handleCellClick={handleCellClick}
          />
        </S.ContentContainer>
      </S.ContentContainer>

      {/* <Alert
          icon="warning"
          message="Selecione um e-mail antes de escolher a ação de Visualizar E-mails ou Restauração."
        /> */}
    </>
  );
}

export default EmailList;

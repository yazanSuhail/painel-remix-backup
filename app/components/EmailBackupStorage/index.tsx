import { useState } from "react";
import { useNavigate } from "@remix-run/react";

import { backupBtnIcon, eye } from "../../assets/Icons";
import DataGridTable from "../DataGridTable";
import Alert from "~/components/Alert";
import GrayButton from "../GrayButton";
import ProgressBar from "../ProgressBar";
import { GridColDef } from "@mui/x-data-grid";

import * as S from "./styles";

interface IEmailBackupStorageProps {
  data: {
    email: string;
    emailsCount: number;
    id: number;
    lastBackupPerformed: string;
    totalStorage: number;
    usedStorage: number;
  }[];

  title?: string;
}

function EmailBackupStorage({ title, data }: IEmailBackupStorageProps) {
  const navigate = useNavigate();
  const newtitle = "Espaço do backup de e-mail";
  const [selectedEmail, setSelectedEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [selectedCell, setSelectedCell] = useState("");

  const handleRadioChange = (email: string) => {
    setSelectedEmail(email);
  };

  const goToEmailsListPage = () => {
    if (selectedEmail === "") {
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 6000);
    } else {
      console.log(selectedEmail);
      navigate(`/lista-de-emails?email=${selectedEmail}`);
    }
  };

  const handleEmailClick = (email: string) => {
    navigate(`/lista-de-emails?email=${email}`);
  };

  const handleCellClick = (params: { row: { email: string } }) => {
    const email = params.row.email;
    setSelectedCell(email);
    handleRadioChange(email);
  };

  const columns: GridColDef[] = [
    {
      field: "radio",
      headerName: "",
      renderCell: (params) => (
        <input
          type="radio"
          checked={params.row.email === selectedCell}
          onChange={() => handleCellClick(params.row.email)}
        />
      ),
      sortable: false,
      width: 50,
      disableColumnMenu: true,
    },
    {
      field: "email",
      renderHeader: () => (
        <S.DataGridHeaderNames>Contas de e-mail</S.DataGridHeaderNames>
      ),
      headerName: "Contas de e-mail",
      width: 200,
      renderCell: (params) => (
        <S.SelectedEmailLink
          selected={params.row.email === selectedCell}
          onClick={() => {
            handleEmailClick(params.row.email);
          }}>
          {params.value}
        </S.SelectedEmailLink>
      ),
    },
    {
      field: "emailsCount",
      headerName: "Número de e-mails",
      renderHeader: () => (
        <S.DataGridHeaderNames>Número de e-mails</S.DataGridHeaderNames>
      ),
      width: 200,
    },
    {
      field: "lastBackupPerformed",
      renderHeader: () => (
        <S.DataGridHeaderNames>Último backup do sistema</S.DataGridHeaderNames>
      ),
      headerName: "Último backup do sistema",
      width: 200,
    },
    {
      field: "usedSpace",
      headerName: "Espaço de backup usado",
      renderHeader: () => (
        <S.DataGridHeaderNames>Espaço de backup usado</S.DataGridHeaderNames>
      ),
      renderCell: (params) => (
        <ProgressBar
          usedStorage={params.row.usedStorage}
          totalStorage={params.row.totalStorage}
        />
      ),
      width: 400,
    },
    {
      sortable: false,
      field: "link",
      headerName: "",
      disableColumnMenu: true,
      renderCell: () => (
        <S.RowLinkButton
          target="_blank"
          href="https://www.youtube.com/watch?v=cE-UIbpag3I&list=RDcE-UIbpag3I&start_radio=1">
          Adquirir mais espaço
        </S.RowLinkButton>
      ),
      width: 200,
    },
  ];

  return (
    <>
      <S.Title>{newtitle}</S.Title>
      <S.BtnContainer>
        <GrayButton
          Title={"Ver e-mails"}
          IconForMobileBtn={eye}
          onClick={goToEmailsListPage}
        />
        <GrayButton
          onClick={() => {
            selectedEmail === ""
              ? alert("Seleciona um e-mail...")
              : alert(selectedEmail);
          }}
          Title={"Restaurar"}
          IconForMobileBtn={backupBtnIcon}
        />
      </S.BtnContainer>
      <S.TableContainer>
        <DataGridTable
          columns={columns}
          data={data}
          selectedEmail={selectedEmail}
          onRadioChange={handleRadioChange}
          handleCellClick={handleCellClick}
        />
      </S.TableContainer>

      {showAlert && (
        <Alert
          icon="warning"
          message="Selecione um e-mail antes de escolher a ação de Visualizar E-mails ou Restauração."
          subMessage="Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
        />
      )}
    </>
  );
}

export default EmailBackupStorage;

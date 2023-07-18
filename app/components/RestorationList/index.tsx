import { GridColDef } from "@mui/x-data-grid";
import * as S from "./styles";
import DataGridTable from "../DataGridTable";

interface IRestoreProps {
  data: {
    id: number;
    email: string;
    startDate: string;
    endDate: string;
    timeSpent: string;
    status: string;
  }[];
}

type TStatus = "completed" | "in progress" | "failed";

function RestorationList({ data }: IRestoreProps) {
  enum StatusColors {
    "in progress" = "primary",
    completed = "success",
    failed = "error",
  }

  const columns: GridColDef[] = [
    {
      field: "email",
      renderHeader: () => <S.DataGridHeaderNames>Contas</S.DataGridHeaderNames>,
      headerName: "Contas de e-mail",
      minWidth: 400,
      sortable: false,
      flex: 1,
    },
    {
      field: "startDate",
      headerName: "Iniciado",
      renderHeader: () => (
        <S.DataGridHeaderNames>Iniciado</S.DataGridHeaderNames>
      ),
      minWidth: 250,
      sortable: false,
    },
    {
      field: "endDate",
      renderHeader: () => (
        <S.DataGridHeaderNames>Concluído as</S.DataGridHeaderNames>
      ),
      headerName: "Concluído as",
      minWidth: 250,
      sortable: false,
    },
    {
      field: "timeSpent",
      renderHeader: () => (
        <S.DataGridHeaderNames>Tempo gasto</S.DataGridHeaderNames>
      ),
      headerName: "Tempo gasto",
      minWidth: 200,
      sortable: false,      
    },
    {
      field: "status",
      headerName: "Status",
      renderHeader: () => <S.DataGridHeaderNames>Status</S.DataGridHeaderNames>,
      minWidth: 120,
      sortable: false,
      renderCell: (data) => {
        const status = data.row.status;
        return (
          <S.StatusChip
            color={StatusColors[status as TStatus]}
            label={
              <span>
                <b>{status}</b>
              </span>
            }
          />
        );
      },
    },
  ];

  return (
    <S.RestorationTableContainer>
      <h2>Restauração</h2>
      <p>
        Acompanhe o andamento das suas solicitações de restauração de e-mails.
      </p>
      <S.TableContainer>
        <DataGridTable
          disableClickableRow
          showHeaderBorder
          showCellBorder
          data={data}
          columns={columns}
          sxProps={{
            ".MuiDataGrid-columnHeaders": { backgroundColor: "#FAFAFA" },
            ".MuiDataGrid-cell:focus, .MuiDataGrid-columnHeader:focus": { outline: 'none' }, 
          }}
          sortModel={[{field: 'status', sort: 'desc'}]}                         
        />
      </S.TableContainer>
    </S.RestorationTableContainer>
  );
}

export default RestorationList;

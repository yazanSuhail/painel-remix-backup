import { SxProps, Theme } from "@mui/material";
import * as S from "./styles";
import { DataGrid, GridColDef, GridSortModel, GridSortingInitialState, ptBR } from "@mui/x-data-grid";

interface IEmailBackupStorageProps {
  email: string;
  emailsCount: number;
  id: number;
  lastBackupPerformed: string;
  totalStorage: number;
  usedStorage: number;
}

interface IEmailListProps {
  from: string;
  to: string;
  subject: string;
  date: string;
  downloade: boolean;
}

interface IRestaurationProps {
  id: number;
  email: string;
  startDate: string;
  endDate: string;
  timeSpent: string;
  status: string;
}

interface ITableProps {
  data: IEmailBackupStorageProps[] | IEmailListProps[] | IRestaurationProps[];
  selectedEmail?: string;
  onRadioChange?: (email: string) => void;
  columns: GridColDef[];
  handleCellClick?: (params: { row: { email: string } }) => void;
  sxProps?: SxProps<Theme>;
  disableClickableRow?: boolean
  showCellBorder?: boolean
  showHeaderBorder?: boolean
  sortModel?: GridSortModel
}

const DataGridTable = (data: ITableProps) => {
  return (
    <S.DataGridContainer>
      <DataGrid  
        showColumnVerticalBorder={data.showHeaderBorder}
        showCellVerticalBorder = {data.showCellBorder}
        disableRowSelectionOnClick = {data.disableClickableRow}
        rows={data.data}
        columns={data.columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          }, 
          //sorting: {sortModel: [{ field: data.sorting?.field || "", sort: data.sorting?.sort || "desc" }]}
        }}           
        sortModel={data.sortModel}    
        onCellClick={data.handleCellClick}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        pageSizeOptions={[5, 25, 50, 100]}
        sx={{ maxHeight: 400, ...data.sxProps }}

      />
    </S.DataGridContainer>
  );
};

export default DataGridTable;

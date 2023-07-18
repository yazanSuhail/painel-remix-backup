export interface IEmailStoragePrps {
  emailsData: IEmailsData;
  title: string;
}

export interface IEmailsData {
  email: string;
  emailsCount: number;
  id: number;
  lastBackupPerformed: string;
  totalStorage: number;
  usedStorage: number;
}

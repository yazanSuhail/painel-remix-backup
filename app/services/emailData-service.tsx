import emailsData from "~/Mocks/EmailBackupSpace.json";

export const fetchEmailsData = async () => {
  // Simulate an API call by waiting for 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return emailsData;
};

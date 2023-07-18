import EmailBackupStorage from "~/components/EmailBackupStorage";
import Card from "~/components/Card";
import { fetchEmailsData } from "~/services/emailData-service";
import { useLoaderData } from "@remix-run/react";
import data from "~/Mocks/EmailBackupSpace.json";

export const loader = async () => {
  const emailsData = await fetchEmailsData();
  return { emailsData: emailsData };
};

function Main() {
  // const { emailsData } = useLoaderData();

  // if (emailsData === null) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Card>
      <EmailBackupStorage data={data} title="Espaço do backup de e-mail" />
    </Card>
  );
}

export default Main;

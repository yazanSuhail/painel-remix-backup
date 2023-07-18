import Card from "~/components/Card";
import { fetchEmailsData } from "~/services/emailData-service";
import { useLoaderData } from "@remix-run/react";
import data from "~/Mocks/EmailList.json";
import EmailList from "~/components/EmailList";

function EmailsListPage() {
  // const { emailsData } = useLoaderData();

  // if (emailsData === null) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Card>
      <EmailList data={data} title="Lista de e-mails" />
    </Card>
  );
}

export default EmailsListPage;

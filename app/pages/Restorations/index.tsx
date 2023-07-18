import { useState } from "react";
import Card from "~/components/Card";
import RestorationList from "~/components/RestorationList";

import data from "~/Mocks/Restauracao.json";

function RestorationsPage() {
  return (
    <Card>
      <RestorationList data={data} />;
    </Card>
  );
}

export default RestorationsPage;

import { PropsWithChildren } from "react";
import BasicBreadcrumbs from "~/components/Breadcrumbs";
import Menu from "~/components/Menu";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Menu />
      <BasicBreadcrumbs />
      <div>{children}</div>
    </>
  );
}

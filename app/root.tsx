import {
  Link,
  Links,
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import theme from "./theme";
import { ThemeProvider } from "styled-components";

import { MainLayout } from "./layouts/MainLayout";

import globalStylesUrl from "~/styles/globalstyles.css";

import { ReactNode } from "react";
import { queryClient } from "./services/query-client";
import { QueryClientProvider } from "@tanstack/react-query";

export interface IDocumentProps {
  children: ReactNode;
  title: string;
}

export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];
<link
  rel="SHORTCUT ICON"
  href="//hp.imguol.com.br/c/home/layout/camaleao/favico/favico.ico"
/>;

export default function App() {
  return (
    <Document title={"Backup"}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Outlet />
          </MainLayout>
        </ThemeProvider>
      </QueryClientProvider>
    </Document>
  );
}

function Document({ children, title }: IDocumentProps) {
  return (
    <html lang="pt">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="SHORTCUT ICON"
          href="https://imguol.com.br/c/home/layout/camaleao/favico/favico.ico"
        />
        <Links />
        <title>{title}</title>
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

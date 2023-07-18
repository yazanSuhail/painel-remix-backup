import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import * as S from "./styles";

export default function BasicBreadcrumbs() {
  const navigate = useNavigate();
  const [isOnMainPage, setIsOnMainPage] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      setIsOnMainPage(true);
    }
  }, [pathname]);

  const pathnames = pathname?.split("/").filter(Boolean);
  const handleClick = (event: { preventDefault: () => void }) => {
    if (pathname !== "/") {
      navigate("/");
    }
    event.preventDefault();
  };

  const transformName = (name: string) => {
    const words = name.split("-");
    const transformedWords = words.map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    });

    if (name === "restorations") {
      return "Restaurações";
    }

    const joinedName = transformedWords.join(" ");

    if (joinedName.toLowerCase() === "lista de emails") {
      return "Lista de e-mails";
    }

    return joinedName;
  };

  return (
    <S.BreadcrumbsContainer>
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            sx={{ fontSize: 14 }}
            underline={isOnMainPage ? "none" : "hover"}
            color={isOnMainPage ? "textPrimary" : "inherit"}
            href="/"
            onClick={handleClick}>
            <span
              style={{
                color: pathname !== "/" ? "#305DD7" : "rgba(0, 0, 0, 0.87)",
              }}>
              Página inicial
            </span>
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const displayName = transformName(name);

            if (isLast) {
              return (
                <Typography
                  key={name}
                  color={isOnMainPage ? "textPrimary" : "inherit"}
                  sx={{ fontSize: 14 }}>
                  {displayName}
                </Typography>
              );
            } else {
              return (
                <Link
                  key={name}
                  sx={{ fontSize: 14 }}
                  underline="hover"
                  color={isOnMainPage ? "textPrimary" : "inherit"}
                  href={routeTo}>
                  {displayName}
                </Link>
              );
            }
          })}
        </Breadcrumbs>
      </div>
    </S.BreadcrumbsContainer>
  );
}

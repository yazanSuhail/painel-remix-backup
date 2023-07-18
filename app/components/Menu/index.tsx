import * as React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "@remix-run/react";
import * as S from "./styles";
import { AppBar, Box, CssBaseline } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { backup, home, logo, configuracao } from "~/assets/Icons";
import { useState } from "react";

const drawerWidth = 260;

interface Props {
  window?: () => Window;
}

export default function Menu(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const { pathname } = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const ActiveLinkStyle = {
    color: "#305DD7",
    fontWeight: "bold",
  };

  const handleCollapsClick = () => {
    setOpen(!open);
  };

  const drawer = (
    <>
      <Toolbar sx={{ paddingTop: { sm: 12 } }} />
      <S.MenuContainer>
        <nav>
          <Link
            onClick={() => setOpen(false)}
            to="/"
            style={pathname === "/" ? ActiveLinkStyle : {}}>
            <img src={home} />
            <span>Painel principal</span>
          </Link>

          <>
            <S.CollapseMenuContainer onClick={handleCollapsClick}>
              <img src={backup} />
              <S.SystemStatusLabel>Status do sistema</S.SystemStatusLabel>
              {open ? <ExpandLess /> : <ExpandMore />}
            </S.CollapseMenuContainer>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <S.LinkWrraper>
                  <Link
                    style={pathname === "/restorations" ? ActiveLinkStyle : {}}
                    to="/restorations">
                    <span>Restaurações</span>
                  </Link>
                </S.LinkWrraper>
              </List>
            </Collapse>
          </>

          <Link
            onClick={() => setOpen(false)}
            style={
              pathname === "/configuracao-de-backup" ? ActiveLinkStyle : {}
            }
            to="/configuracao-de-backup">
            <img src={configuracao} />
            <span>Configuração de backup</span>
          </Link>
        </nav>
      </S.MenuContainer>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const searchParams = useSearchParams();
  const email = searchParams[0].get("email");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `100%` },
          ml: { sm: `${drawerWidth}px` },
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: "none",
          borderBottom: "1px solid #E6E6E6",
          backgroundColor: "#FCFCFC",
          color: "#305DD7",
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}>
            <MenuIcon />
          </IconButton>
          <S.HeaderContent>
            <S.Logo>
              <img width="63.5rem" src={logo} /> backup de e-mail
            </S.Logo>
            {email && <S.UserEmail>{email}</S.UserEmail>}
          </S.HeaderContent>
        </Toolbar>
      </AppBar>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}>
        {drawer}
      </Drawer>
      {/* Desktop Menu */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open>
        {drawer}
      </Drawer>
    </Box>
  );
}

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import styled from "styled-components";
import { theme } from "../styles/theme";

const CustomAppBar = styled(AppBar)`
  background: ${theme.colors.surface} !important;
  box-shadow: none;
`;

const NavButton = styled(Button)`
  color: ${theme.colors.text} !important;
  font-weight: 500;
  text-transform: none;
  transition: 0.3s ease;

  &:hover {
    color: ${theme.colors.primary} !important;
    background: none !important;
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 600 }}
        >
          Meu Portfólio
        </Typography>
        <NavButton>Início</NavButton>
        <NavButton>Sobre</NavButton>
        <NavButton>Projetos</NavButton>
        <NavButton>Contato</NavButton>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;

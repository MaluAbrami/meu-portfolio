import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import styled from "styled-components";
import { theme } from "../styles/theme";

const CustomAppBar = styled(AppBar)`
  background: ${theme.colors.surface} !important;
  box-shadow: none;
  display: flex;
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1100;
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

const ContainerButtons = styled.div`
  display: flex;
  gap: 30px;
`;

const Navbar = () => {
  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <ContainerButtons>
            <NavButton onClick={() => smoothScrollTo('Sobre')}>Sobre</NavButton>
            <NavButton onClick={() => smoothScrollTo('Habilidades')}>Habilidades</NavButton>
            <NavButton onClick={() => smoothScrollTo('Experiencia')}>Experiência</NavButton>
            <NavButton onClick={() => smoothScrollTo('Projetos')}>Projetos</NavButton>
            <NavButton onClick={() => smoothScrollTo('Contato')}>Contato</NavButton>
        </ContainerButtons>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;

import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Meu Portfólio
        </Typography>
        <Button color="inherit">Início</Button>
        <Button color="inherit">Sobre</Button>
        <Button color="inherit">Projetos</Button>
        <Button color="inherit">Contato</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorageIcon from '@mui/icons-material/Storage';
import './App.css';

const navItems = [
  { label: 'Servicios', href: '#services' },
  { label: 'Proceso', href: '#process' },
  { label: 'Contacto', href: '#contact' },
];

const services = [
  {
    icon: <CodeIcon fontSize="large" />,
    title: 'Sitios y sistemas web',
    text: 'Diseñamos sitios y sistemas web autoadministrables, rápidos y preparados para acompañar el crecimiento de tu negocio.',
  },
  {
    icon: <StorageIcon fontSize="large" />,
    title: 'Software a medida',
    text: 'Automatizamos procesos internos para que tu equipo trabaje mejor, más rápido y con menos pasos manuales.',
  },
  {
    icon: <ShoppingCartOutlinedIcon fontSize="large" />,
    title: 'E-commerce',
    text: 'Integramos tiendas online con foco en conversión, gestión simple y una experiencia de compra clara.',
  },
  {
    icon: <PhoneIphoneIcon fontSize="large" />,
    title: 'Aplicaciones móviles',
    text: 'Creamos apps funcionales para que clientes y equipos puedan trabajar desde cualquier dispositivo.',
  },
];

const stats = [
  { value: '100%', label: 'Enfoque en negocio real' },
  { value: '3 pasos', label: 'Proceso claro y ágil' },
  { value: '24/7', label: 'Disponibilidad digital' },
];

const highlights = [
  'Estrategia digital con objetivos de negocio claros.',
  'Interfaces simples, intuitivas y fáciles de administrar.',
  'Tecnología moderna y arquitectura pensada para crecer.',
];

const processSteps = [
  'Relevamos objetivos, usuarios y puntos de fricción para definir la ruta correcta.',
  'Diseñamos una solución con estructura clara y una experiencia funcional desde el inicio.',
  'Desarrollamos, validamos y acompañamos la evolución del producto después del lanzamiento.',
];

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0f766e',
      dark: '#0b4f4a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f59e0b',
      contrastText: '#111827',
    },
    text: {
      primary: '#0f172a',
      secondary: '#526074',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"Source Sans 3", Arial, Helvetica, sans-serif',
    h1: {
      fontWeight: 800,
      lineHeight: 0.98,
    },
    h2: {
      fontWeight: 800,
      lineHeight: 1.08,
    },
    h3: {
      fontWeight: 800,
    },
    button: {
      fontWeight: 800,
      textTransform: 'none',
    },
  },
});

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = navItems.map((item) => (
    <Button key={item.href} component="a" href={item.href} color="inherit" onClick={closeMenu}>
      {item.label}
    </Button>
  ));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="site-shell">
        <Box component="header" id="top" className="hero">
          <AppBar component="nav" position="static" color="transparent" elevation={0}>
            <Container maxWidth="lg">
              <Toolbar disableGutters className="topbar">
                <Link href="#top" aria-label="Nativo Sistemas inicio" className="brand-link">
                  <Box component="img" src="/img/logo-nativo1blanco.svg" alt="Nativo Sistemas" />
                </Link>

                <Stack direction="row" spacing={1.5} className="desktop-nav">
                  {navLinks}
                </Stack>

                <IconButton
                  color="inherit"
                  edge="end"
                  aria-label="Abrir menú"
                  aria-controls="mobile-menu"
                  aria-expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen(true)}
                  className="mobile-menu-button"
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </Container>
          </AppBar>

          <Drawer
            anchor="right"
            open={isMenuOpen}
            onClose={closeMenu}
            slotProps={{ paper: { id: 'mobile-menu' } }}
          >
            <Box className="drawer-content">
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography component="p" variant="h6">
                  Menú
                </Typography>
                <IconButton aria-label="Cerrar menú" onClick={closeMenu}>
                  <CloseIcon />
                </IconButton>
              </Stack>
              <List>
                {navItems.map((item) => (
                  <ListItemButton key={item.href} component="a" href={item.href} onClick={closeMenu}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Drawer>

          <Container maxWidth="lg" className="hero-content">
            <Chip label="Software a medida" color="secondary" className="hero-chip" />
            <Typography variant="h1">Soluciones digitales para impulsar tu empresa.</Typography>
            <Typography className="hero-copy">
              Diseñamos y desarrollamos sistemas web, tiendas online y aplicaciones móviles con foco en rendimiento,
              usabilidad y crecimiento a largo plazo.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} className="hero-actions">
              <Button href="#contact" variant="contained" color="secondary" size="large" endIcon={<EmailOutlinedIcon />}>
                Hablemos
              </Button>
              <Button href="#services" variant="outlined" color="inherit" size="large" endIcon={<DevicesIcon />}>
                Ver servicios
              </Button>
            </Stack>
          </Container>
        </Box>

        <Box component="main">
          <Box component="section" aria-labelledby="intro-title" className="section-block">
            <Container maxWidth="lg">
              <Grid container spacing={{ xs: 4, md: 7 }} alignItems="flex-start">
                <Grid item xs={12} md={5}>
                  <Typography className="section-kicker">Experiencia + tecnología</Typography>
                  <Typography id="intro-title" variant="h2">
                    Creamos productos simples de usar y listos para escalar.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack spacing={3}>
                    <Typography color="text.secondary" className="body-copy">
                      Creamos soluciones que acompañan el crecimiento real de tu negocio. Combinamos una experiencia
                      clara, una arquitectura estable y estrategia digital para que cada decisión tenga impacto.
                    </Typography>
                    <Stack component="ul" spacing={1.5} className="highlight-list" aria-label="Ventajas de Nativo Sistemas">
                      {highlights.map((item) => (
                        <Box component="li" key={item}>
                          <CheckCircleOutlinedIcon color="primary" />
                          <Typography>{item}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Box component="section" aria-label="Indicadores clave" className="stats-band">
            <Container maxWidth="lg">
              <Grid container spacing={2.5}>
                {stats.map((stat) => (
                  <Grid item xs={12} md={4} key={stat.label}>
                    <Card variant="outlined" className="stat-card">
                      <CardContent>
                        <Typography component="strong">{stat.value}</Typography>
                        <Typography color="text.secondary">{stat.label}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>

          <Box component="section" id="services" aria-labelledby="services-title" className="services-band">
            <Container maxWidth="lg">
              <Box className="section-heading">
                <Typography className="section-kicker">Servicios</Typography>
                <Typography id="services-title" variant="h2">
                  Desarrollo integral para tu operación digital
                </Typography>
              </Box>

              <Grid container spacing={2.5}>
                {services.map((service) => (
                  <Grid item xs={12} sm={6} lg={3} key={service.title}>
                    <Card variant="outlined" className="service-card">
                      <CardContent>
                        <Box className="service-icon" aria-hidden="true">
                          {service.icon}
                        </Box>
                        <Typography variant="h3">{service.title}</Typography>
                        <Typography color="text.secondary">{service.text}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>

          <Box component="section" id="process" aria-labelledby="process-title" className="section-block">
            <Container maxWidth="lg">
              <Box className="section-heading">
                <Typography className="section-kicker">Método de trabajo</Typography>
                <Typography id="process-title" variant="h2">
                  Del diagnóstico al producto en producción
                </Typography>
              </Box>

              <Stack component="ol" className="process-list" divider={<Divider />}>
                {processSteps.map((step, index) => (
                  <Box component="li" key={step}>
                    <Typography component="span">{String(index + 1).padStart(2, '0')}</Typography>
                    <Typography color="text.secondary">{step}</Typography>
                  </Box>
                ))}
              </Stack>
            </Container>
          </Box>

          <Container maxWidth="lg" component="section" id="contact" aria-labelledby="contact-title" className="contact-section">
            <Box>
              <Typography className="section-kicker">Contacto</Typography>
              <Typography id="contact-title" variant="h2">
                Hablemos de tu próxima solución digital.
              </Typography>
              <Typography>Rosario, Santa Fe, Argentina</Typography>
            </Box>
            <Button
              href="mailto:nativosistemas@outlook.com.ar"
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<EmailOutlinedIcon />}
            >
              nativosistemas@outlook.com.ar
            </Button>
          </Container>
        </Box>

        <Container maxWidth="lg" component="footer" className="site-footer">
          <Stack direction="row" spacing={1} alignItems="center">
            <AppsIcon color="primary" />
            <Typography>Nativo Sistemas</Typography>
          </Stack>
          <IconButton component="a" href="#top" aria-label="Volver al inicio">
            <ArrowUpwardIcon />
          </IconButton>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;

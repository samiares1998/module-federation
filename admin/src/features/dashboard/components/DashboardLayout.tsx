// src/features/dashboard/components/DashboardLayout.tsx
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import { useAuth } from "../../../store/authStore";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const menuItems = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Usuarios", path: "/users" },
    { text: "Configuración", path: "/settings" },
  ];

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "primary.main",
            color: "white",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Admin
          </Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "primary.dark",
                      color: "white",
                    },
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

         <Button
            onClick={handleLogout}
            variant="contained"
            color="error"
            fullWidth
            sx={{ mt: 4 }}
          >
            Cerrar sesión
        </Button>
        </Box>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <AppBar position="static" color="default" elevation={0}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Bienvenido, {user?.name}
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Renderiza la página hija */}
        <Box mt={2}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

// src/features/dashboard/pages/DashboardPage.jsx
import { Grid, Paper } from "@mui/material";

export default function DashboardPage() {
  return (
    <Grid container spacing={3}>
     
        <Paper sx={{ p: 3 }}>📊 Estadísticas</Paper>

        <Paper sx={{ p: 3 }}>👥 Usuarios activos</Paper>
  
 
        <Paper sx={{ p: 3 }}>⚙️ Configuración rápida</Paper>

    </Grid>
  );
}

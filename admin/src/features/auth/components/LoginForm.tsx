import { useState } from "react";
import { authService } from "../services/authService";
import { useAuth } from "../../../store/authStore";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Alert,
} from "@mui/material";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await authService.login(email, password);
      login(data.user); // guarda el usuario en el contexto
      navigate("/dashboard"); // redirige al dashboard
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #6366f1, #9333ea)",
      }}
    >
      <Card sx={{ width: "100%", maxWidth: 400, boxShadow: 6, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
            Iniciar Sesión
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
          >
            <TextField
              label="Correo"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
            <TextField
              label="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
            />

            {error && <Alert severity="error">{error}</Alert>}

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Ingresar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

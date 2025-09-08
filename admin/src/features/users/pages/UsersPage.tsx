// src/features/users/pages/UsersPage.jsx
import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import UsersTable from "../components/UsersTable";
import { Box, Typography, CircularProgress } from "@mui/material";

export default function UsersPage() {
  const [users, _setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((_data) => {
     // setUsers(data);
      setLoading(false);
    });
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Usuarios
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <UsersTable users={users} />
      )}
    </Box>
  );
}

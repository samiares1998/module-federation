// src/features/users/services/userService.js

const mockUsers = [
    { id: 1, name: "Juan Pérez", email: "juan@example.com", role: "Admin" },
    { id: 2, name: "María Gómez", email: "maria@example.com", role: "Editor" },
    { id: 3, name: "Carlos Ruiz", email: "carlos@example.com", role: "Viewer" },
    { id: 4, name: "Ana Torres", email: "ana@example.com", role: "Admin" },
  ];
  
  export function getUsers() {
    return Promise.resolve(mockUsers); // Simula llamada a API
  }
  
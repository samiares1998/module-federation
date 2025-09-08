export type User = {
    id: number;
    name: string;
    email: string;
  };
  
  export const authService = {
    login: async (email: string, password: string): Promise<{ token: string; user: User }> => {
      // Simulación de login válido
      if (password === "1234") {
        return {
          token: "fake-jwt-token",
          user: { id: 1, name: "Admin", email }
        };
      }
      throw new Error("Credenciales inválidas");
    }
  };
  
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import { useAuth } from "../store/authStore";
import type { JSX } from "react";
import UsersPage from "../features/users/pages/UsersPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import DashboardLayout from "../features/dashboard/components/DashboardLayout";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function PublicRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  return !user ? children : <Navigate to="/dashboard" />;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        {/* Rutas privadas con layout */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="users" element={<UsersPage />} />
          {/* aquí puedes agregar más, ej: settings */}
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

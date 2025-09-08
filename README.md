# Module Federation 🚀

Este proyecto es una demo práctica para implementar **Microfrontends** usando **Module Federation** con **Vite + React + TypeScript**.  

La estructura principal del proyecto es:

MODULE-FEDERATION/
├── admin/ → Módulo remoto que expone rutas y componentes para administración
├── client/ → Módulo remoto que expone rutas y componentes para clientes
└── shell/ → Host que consume dinámicamente los módulos admin y client


---

## 📦 Tecnologías usadas
- [Vite](https://vitejs.dev/) (builder rápido para frontend)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/) (navegación por rutas)
- [@originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) (plugin para habilitar Module Federation en Vite)

---

## ⚙️ Configuración de Federation

Cada proyecto tiene su propio `vite.config.ts`:

### Admin (`admin/vite.config.ts`)
```ts
federation({
  name: 'admin',
  filename: 'remoteEntry.js',
  exposes: {
    './AdminRoutes': './src/routes/AdminRoutes.tsx',
  },
  shared: ['react', 'react-dom', 'react-router-dom'],
})

Client (client/vite.config.ts)

federation({
  name: 'client',
  filename: 'remoteEntry.js',
  exposes: {
    './ClientRoutes': './src/routes/ClientRoutes.tsx',
  },
  shared: ['react', 'react-dom', 'react-router-dom'],
})


Shell (shell/vite.config.ts)

federation({
  name: 'host',
  remotes: {
    admin: 'http://localhost:4173/assets/remoteEntry.js',
    client: 'http://localhost:5174/assets/remoteEntry.js',
  },
  shared: ['react', 'react-dom', 'react-router-dom'],
})


Admin
    // src/routes/AdminRoutes.tsx
    const adminRoutes = [
    { path: "/admin/users", element: <UsersPage /> }
    ];

Client

    // src/routes/ClientRoutes.tsx
    const clientRoutes = [
    { path: "/client/home", element: <HomePage /> }
    ];


Shell
    // src/App.tsx
    const AdminRoutes = React.lazy(() => import("admin/AdminRoutes"));
    const ClientRoutes = React.lazy(() => import("client/ClientRoutes"));


▶️ Cómo correr el proyecto
1. Instalar dependencias

En cada carpeta (admin, client, shell):

    npm install
    npm run dev

Por defecto se sirven en:

Admin: http://localhost:4173

Client: http://localhost:5174

Shell (host): http://localhost:5175
 (o el puerto libre que tome)


🧩 ¿Qué aprendemos aquí?

    Cómo exponer módulos con exposes.

    Cómo consumir remotos desde un host.

    Cómo aislar rutas por microfrontend.

    Cómo cargar dinámicamente bundles solo cuando se necesitan.


📌 Próximos pasos

    Añadir autenticación compartida entre microfrontends.

    Configurar CI/CD para desplegar cada microfrontend de forma independiente.

    Integrar diseño compartido (ej: UI library común).
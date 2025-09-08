import React, { Suspense } from "react";

const AdminApp = React.lazy(() => import("admin/AdminApp"));
const ClientApp = React.lazy(() => import("client/ClientApp"));

export default function App() {
  return (
    <div>
      <h1>Shell App</h1>

      <Suspense fallback={<div>Loading Admin...</div>}>
        <AdminApp />
      </Suspense>

      <Suspense fallback={<div>Loading Client...</div>}>
        <ClientApp />
      </Suspense>
    </div>
  );
}

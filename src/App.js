import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import NewTransactionPage from "./pages/NewTransactionPage";
import SettingsPage from "./pages/Settings";
import Layout from "./components/Layout/Layout";
import ErrorPage from './pages/Error';
import WalletViewer from "./components/WalletViewer/WalletViewer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      //{ path: "/wallet", element: <WalletPage /> },
      { path: "wallet/:walletId", element: <WalletViewer /> },
      { path: "new-transaction", element: <NewTransactionPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

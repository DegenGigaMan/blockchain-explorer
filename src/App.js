import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import CreateTxnPage from "./pages/CreateTransaction/CreateTxnPage";
import SettingsPage from "./pages/Settings/SettingsPage";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./pages/Error/ErrorPage";
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
      { path: "createTxn", element: <CreateTxnPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

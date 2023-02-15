import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, { BlockchainLoader } from "./pages/Home";
import NewTransactionPage from "./pages/NewTransactionPage";
import SettingsPage from "./pages/Settings";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./pages/Error";
import WalletViewer from "./components/WalletViewer/WalletViewer";
import { BlockProvider } from "./store/block-context";
import PendingTransactions from "./components/PendingTransactions/PendingTransactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: BlockchainLoader,
      },
      //{ path: "/wallet", element: <WalletPage /> },
      { path: "wallet/:walletId", element: <WalletViewer /> },
      { path: "new-transaction", element: <NewTransactionPage /> },
      { path: "new-transaction/pending", element: <PendingTransactions /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);

function App() {
  return (
    <BlockProvider>
      <RouterProvider router={router} />
    </BlockProvider>
  );
}

export default App;

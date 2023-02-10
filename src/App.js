import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import WalletPage from './pages/Wallet/WalletPage';
import CreateTxnPage from './pages/CreateTransaction/CreateTxnPage';
import SettingsPage from './pages/Settings/SettingsPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/wallet', element: <WalletPage /> },
  { path: '/createTxn', element: <CreateTxnPage /> },
  { path: '/settings', element: <SettingsPage /> },
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

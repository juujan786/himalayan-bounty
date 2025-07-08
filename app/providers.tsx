"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { AuthProvider } from "./components/AuthContext";
import DataProvider from "./components/DataContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <DataProvider>{children}</DataProvider>
      </AuthProvider>
    </Provider>
  );
} 
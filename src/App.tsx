import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "store";
import { Theme } from "components/Theme";
import { GlobalSnackbar, GlobalSnackbarProvider } from "components/GlobalSnackbar";

import { Routes } from "./Routes";

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme>
          <GlobalSnackbarProvider>
            <GlobalSnackbar />
            <Routes />
          </GlobalSnackbarProvider>
        </Theme>
      </PersistGate>
    </Provider>
  );
}

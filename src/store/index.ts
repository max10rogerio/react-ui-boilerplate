import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch, useSelector as useReduxSelector, TypedUseSelectorHook } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./modules/root_reducer";

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ["layout"],
  },
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({ serializableCheck: false, }),
});

export const persistor = persistStore(store);

export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch, useSelector as useReduxSelector, TypedUseSelectorHook } from "react-redux";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./modules/root_reducer";
import { rootSaga } from "./modules/root_saga";

const DEV_MODE = process.env.NODE_ENV === "development";

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ["layout"],
  },
  rootReducer,
);

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    thunk: false,
  }),
  sagaMiddleware,
];

export const store = configureStore({
  reducer: persistedReducer,
  devTools: DEV_MODE,
  middleware: middlewares,
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

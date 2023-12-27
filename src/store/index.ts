import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Browser local storage

import authReducer from "./reducers/authSlice";
import { encrypt, decrypt } from "../utils/crypto"; // Create this file to handle encryption/decryption

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    {
      in: (state: any) => {
        // return encrypt(state, import.meta.env.VITE_KEY);
        return encrypt(state, 'defineyoutkey');
      },
      out: (state: any) => {
        // return decrypt(state, import.meta.env.VITE_KEY);
        return decrypt(state, 'defineyoutkey');
      },
    },
  ],
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

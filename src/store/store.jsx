import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import authReducer from '../components/utils/authSlice';

// Configuration for redux-persist
const persistConfig = {
    key: 'auth',
    storage,
};

// Wrap the auth reducer with persistReducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Configure the store
export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
    },
});

// Export the persistor
export const persistor = persistStore(store);
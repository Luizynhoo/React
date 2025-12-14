//Configurar todas as nossas configurações da store
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';

export const store = configureStore ({
    reducer: rootReducer,
})
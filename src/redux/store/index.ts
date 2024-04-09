import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';

export const appStore = configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof appStore.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

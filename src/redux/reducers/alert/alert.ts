import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertProps, AlertActionProps } from './alert.types';

const initialState: AlertProps = {
  isOpen: false,
  message: '',
  type: '',
  navigateLink: '',
  navigateState: {},
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    createAlert: (_, action: PayloadAction<AlertActionProps>) => ({ ...initialState, ...action.payload }),
    discardAlert: () => initialState,
  },
});

export const alertActions = alertSlice.actions;

export const alertReducer = alertSlice.reducer;

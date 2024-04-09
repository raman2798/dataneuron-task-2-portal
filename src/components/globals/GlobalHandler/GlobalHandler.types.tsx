import { SyntheticEvent } from 'react';
import { alertActions, Alert } from '@/redux';
import { SnackbarType } from './GlobalHandler.enums';

const { discardAlert } = alertActions;

export type CustomSnackbarProps = {
  isOpen: boolean;
  message?: string;
  type: SnackbarType;
  handleClose: (_: SyntheticEvent | Event, reason?: string) => void;
};

export type AlertProps = {
  isOpen: boolean;
  message?: string;
  navigateLink?: string;
  navigateState?: object;
  type: Alert | string;
  discardAlert: typeof discardAlert;
};

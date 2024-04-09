import { Alert } from './alert.enums';

export type AlertProps = {
  isOpen: boolean;
  message?: string;
  navigateLink?: string;
  navigateState?: object;
  type: Alert | string;
};

export type AlertActionProps = AlertProps & {
  type: string;
};

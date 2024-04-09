import { get, isEqual } from 'lodash';
import { alertActions, Alert, useAppDispatch } from '@/redux';
import { CustomErrorProps } from '@/types';

const { createAlert, discardAlert } = alertActions;

const handleErrors = (error: CustomErrorProps) => {
  const message = get(error, 'message');

  useAppDispatch(
    createAlert({
      type: Alert.ERROR,
      isOpen: true,
      message,
    }),
  );
};

const handleReadAllErrors = (error: CustomErrorProps) => {
  const statusCode = get(error, 'statusCode');

  if (isEqual(statusCode, 404)) {
    useAppDispatch(discardAlert());
  } else {
    handleErrors(error);
  }
};

export { handleErrors, handleReadAllErrors };

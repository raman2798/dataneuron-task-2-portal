import { FC, ReactElement, forwardRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { connect } from 'react-redux';
import { get, has, isEqual, toUpper } from 'lodash';
import { alertActions, Alert } from '@/redux';
import { SnackbarType } from './GlobalHandler.enums';
import { AlertProps as GlobalAlertProps, CustomSnackbarProps } from './GlobalHandler.types';
import { CustomLoader } from '@/components';

const { discardAlert } = alertActions;

const { LOADER } = Alert;

const CustomAlert = forwardRef<HTMLDivElement, AlertProps>((props, ref): ReactElement => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackbar: FC<CustomSnackbarProps> = ({ isOpen, message, type, handleClose }): ReactElement => {
  return (
    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={isOpen} autoHideDuration={2700} onClose={handleClose}>
      <CustomAlert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </CustomAlert>
    </Snackbar>
  );
};

const CustomGlobals: FC<GlobalAlertProps> = ({ isOpen, message, type, navigateLink, navigateState, discardAlert }) => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (link: string, state?: object) => {
      navigate(link, {
        state: state || {},
      });

      discardAlert();
    },
    [navigate, discardAlert],
  );

  const handleClose = useCallback(
    (_: Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }

      if (navigateLink) {
        handleNavigate(navigateLink, navigateState);
      }

      discardAlert();
    },
    [navigateLink, navigateState, handleNavigate, discardAlert],
  );

  useEffect(() => {
    if (type && navigateLink) {
      if (message) {
        setTimeout(() => {
          navigate(navigateLink, {
            state: navigateState,
          });
        }, 600);
      } else {
        handleNavigate(navigateLink, navigateState);
      }
    }
  }, [navigateLink, navigate, handleNavigate, message, type, navigateState]);

  const typeExists = has(SnackbarType, toUpper(type));

  const alertType = SnackbarType[toUpper(type) as keyof typeof SnackbarType];

  if (isOpen && type) {
    if (isEqual(type, LOADER)) {
      return <CustomLoader message={message} />;
    }

    if (typeExists) {
      return <CustomSnackbar isOpen={isOpen} message={message} type={alertType} handleClose={handleClose} />;
    }
  }

  return null;
};

const mapStateToProps = (state: { alert: GlobalAlertProps }) => ({
  isOpen: get(state, 'alert.isOpen'),
  message: get(state, 'alert.message'),
  type: get(state, 'alert.type'),
  navigateLink: get(state, 'alert.navigateLink'),
  navigateState: get(state, 'alert.navigateState'),
});

const mapDispatchToProps = {
  discardAlert,
};

export const GlobalHandler = connect(mapStateToProps, mapDispatchToProps)(CustomGlobals);

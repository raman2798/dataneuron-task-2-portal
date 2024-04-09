import { ModalProps as MuiModalProps, StackProps, SxProps } from '@mui/material';

export type ModalContainerProps = {
  direction?: 'row' | 'column';
  width?: string;
  height?: string;
};

export type ModalProps = {
  modalStyles?: SxProps;
  footerContent?: React.ReactNode;
  footerContentProps?: StackProps;
} & MuiModalProps &
  ModalContainerProps;

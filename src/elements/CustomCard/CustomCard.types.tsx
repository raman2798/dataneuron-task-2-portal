import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material';

export type ICardProps = {
  children: ReactNode;
  sx?: SxProps<Theme>;
};

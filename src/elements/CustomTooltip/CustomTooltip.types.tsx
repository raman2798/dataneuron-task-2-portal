import { ReactElement } from 'react';
import { SxProps, Theme } from '@mui/material';
import { TooltipPlacement } from './CustomTooltip.enums';

export type TooltipProps = {
  title: string;
  children: ReactElement;
  placement?: TooltipPlacement;
  arrow?: boolean;
  sx?: SxProps<Theme>;
};

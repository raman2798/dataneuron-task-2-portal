import { FC, ReactElement } from 'react';
import { Tooltip } from '@mui/material';
import { TooltipPlacement } from './CustomTooltip.enums';
import { TooltipProps } from './CustomTooltip.types';

const CustomTooltip: FC<TooltipProps> = ({ title, placement, children, ...rest }): ReactElement => {
  return (
    <Tooltip title={title} placement={placement || TooltipPlacement.BOTTOM} arrow {...rest}>
      {children}
    </Tooltip>
  );
};

export { CustomTooltip };

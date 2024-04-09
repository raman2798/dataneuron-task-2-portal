import { FC, ReactElement } from 'react';
import { Card, CardContent } from '@mui/material';
import { ICardProps } from './CustomCard.types';

const CustomCard: FC<ICardProps> = ({ children, ...rest }): ReactElement => {
  return (
    <Card {...rest}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export { CustomCard };

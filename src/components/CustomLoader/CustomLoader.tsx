import { FC, ReactElement } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { StyledLoader } from './CustomLoader.style';

type CustomLoaderProps = {
  message?: string;
};

const CustomLoader: FC<CustomLoaderProps> = ({ message = 'Please wait...' }): ReactElement => {
  return (
    <StyledLoader>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CircularProgress
          sx={{
            color: (theme) => theme.palette.primary.main,
            marginBottom: '16px',
          }}
        />
        <Typography variant="h6" color="white">
          {message}
        </Typography>
      </Box>
    </StyledLoader>
  );
};

export { CustomLoader };

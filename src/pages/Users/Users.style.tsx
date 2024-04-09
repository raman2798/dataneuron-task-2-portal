import { Box, styled } from '@mui/material';

export const StyledIcon = styled(Box)<{ backgroundColor: string }>(({ theme, backgroundColor }) => ({
  color: theme.palette.secondary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  borderRadius: '50%',
  backgroundColor,
}));

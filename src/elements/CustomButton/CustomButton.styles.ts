import { SvgIcon, styled } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const StyledButton = styled(LoadingButton)`
  padding: ${({ theme }) => theme.spacing(0.5, 1)};
  min-height: 2rem;
  box-shadow: none;
  text-transform: none;
  .MuiLoadingButton-loadingIndicator {
    display: inline-flex;
    padding: 0.84375rem 0.2rem;
    gap: 0.25rem;
  }
`;

export const ButtonSvgIcon = styled(SvgIcon)`
  width: 1rem;
  height: 1rem;
  margin-right: ${({ theme }) => theme.spacing(-1)};
`;

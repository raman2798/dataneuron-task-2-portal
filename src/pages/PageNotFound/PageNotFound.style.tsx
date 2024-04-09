import { Box, styled } from '@mui/material';
import { COLORS } from '@/theme';

const { GREY } = COLORS;

export const CenteredPageNotFoundWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: calc(100vh - 76vh);
`;

export const PageNotFoundWrapper = styled(Box)`
  width: 100%;
  text-align: center;

  p {
    color: ${GREY};
    margin-top: 7px;
  }

  img {
    width: 200px;
  }
`;

import { styled, FormLabel as MuiFormLabel } from '@mui/material';
import { COLORS, FONT } from '@/theme';

export const CustomFormLabel = styled(MuiFormLabel)`
  font-weight: ${FONT.WEIGHT.MEDIUM};
  font-size: ${FONT.SIZES[16]};
  color: ${COLORS.BLACK};
  &.Mui-disabled {
    color: ${COLORS.GREY};
  }
  &.Mui-focused {
    color: ${COLORS.BLACK};
  }
`;

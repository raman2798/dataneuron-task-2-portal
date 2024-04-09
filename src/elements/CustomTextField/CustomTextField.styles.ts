import { styled, TextField as CustomTextField } from '@mui/material';
import { COLORS, FONT } from '@/theme';
import { CustomFormLabel } from '../CustomFormLabel';

interface MuiTextFieldProps {
  width?: string;
  multiline?: boolean;
}

export const MuiTextField = styled(CustomTextField)<MuiTextFieldProps>`
  border-radius: 0.25rem;
  margin-left: ${({ theme }) => theme.spacing(-0.25)};

  .MuiInputBase-input {
    width: ${({ width }) => width};
    height: 2.75rem;
    color: ${COLORS.BLACK};
    font-weight: ${FONT.WEIGHT.REGULAR};
    font-size: ${FONT.SIZES[16]};
    padding: ${({ multiline }) => (multiline ? ({ theme }) => theme.spacing(0) : ({ theme }) => theme.spacing(0, 1.8))};
    font-style: initial;
    ::placeholder {
      font-size: ${FONT.SIZES[14]};
    }
    :disabled {
      opacity: 0.6;
    }
  }

  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${COLORS.BLACK} !important;
    border-width: 0.0625rem !important;
  }

  .Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: ${COLORS.BLACK} !important;
  }

  .MuiOutlinedInput-input {
    :disabled {
      opacity: 0.4;
      -webkit-text-fill-color: inherit !important;
    }
  }
`;

export const StyledFormLabel = styled(CustomFormLabel)`
  font-size: ${FONT.SIZES[16]};
  font-weight: ${FONT.WEIGHT.REGULAR} !important;
`;

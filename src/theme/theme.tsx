import { createTheme } from '@mui/material';
import { CSSProperties } from '@mui/material/styles/createMixins';

// Define colours to be used throughout the app
export const COLORS = {
  WHITE: '#FFFFFF',
  PEARL: '#FBFCF8',
  BLACK: '#000000',
  BLUE_DISABLED: '#CCD7F4',
  LIGHT: '#f6f8fa',
  GREY: '#CFD2E4',
  GREY_2: '#B2B3B3',
  GREY_3: '#C8C8C8',
  GREY_4: '#DBDBDB',
  GREY_5: '#E0E0E0',
  RED: '#FF0000',
  DARK_RED: '#CA0B0B',
  LIGHT_RED: '#FFE5E5',
  ORANGE: '#E87B19',
  BRAND_1: '#006623',
  BRAND_2: '#B9CDC2',
  BRAND_3: '#EDF1EB',
  BLUE: '#D0D7DE',
};

declare module '@mui/material/styles' {
  interface Mixins {
    flexboxOverflowHack?: CSSProperties;
  }
}

export const FONT = {
  // Define available font-families to be used throughout the app
  FAMILY: {
    NUNITO: ['Helvetica', 'sans-serif'].join(','),
  },
  LINE_HEIGHT: '136.4%',
  // Define font weights that would be used throughout the app
  WEIGHT: {
    LIGHT: 300,
    REGULAR: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700,
  },
  // Define font sizes that would be used throughout the app in rem
  // the numbers on the left indicates the px equivalent of the rem values
  SIZES: {
    48: '3rem',
    36: '2.25rem',
    32: '2rem',
    30: '1.875rem',
    28: '1.75rem',
    24: '1.5rem',
    22: '1.375rem',
    20: '1.25rem',
    18: '1.125rem',
    16: '1rem',
    15: '0.9375rem',
    14: '0.875rem',
    12: '0.75rem',
    10: '0.625rem',
    9: '0.563rem',
    8: '0.5rem',
  },
  LINE_HEIGHTS: {
    11: '0.688rem',
    12: '0.75rem',
    13: '0.813rem',
    14: '0.875rem',
    16: '1rem',
    19: '1.188rem',
    22: '1.375rem',
    26: '1.563rem',
    27: '1.688rem',
    30: '1.875rem',
    33: '2.063rem',
    38: '2.375rem',
    49: '3.063rem',
  },
};

export const BORDERS = {
  BORDER_1: `0.0625rem solid ${COLORS.WHITE}`,
  BORDER_2: `0.0625rem solid ${COLORS.GREY}`,
  BORDER_3: `0.125rem solid ${COLORS.GREY}`,
  BORDER_4: `0.125rem solid ${COLORS.BLACK}`,
  BORDER_5: `0.0625rem solid ${COLORS.GREY}`,
  BORDER_6: `0.0313rem solid ${COLORS.BLUE}`,
  BORDER_7: `0.0125rem solid ${COLORS.GREY_5}`,
  BORDER_8: `0.025rem solid ${COLORS.GREY_5}`,
  BORDER_9: `0.0125rem solid ${COLORS.BLACK}`,
  BORDER_ERROR: `0.0625rem solid ${COLORS.RED}`,
  BORDER_DOTTED: `0.125rem dashed ${COLORS.GREY}`,
};

export const dataNeuronTheme = createTheme({
  palette: {
    text: {
      primary: COLORS.BLACK,
      disabled: COLORS.GREY,
    },
    primary: {
      main: COLORS.BLACK,
    },
    secondary: {
      main: COLORS.WHITE,
    },
  },
  typography: {
    fontFamily: FONT.FAMILY.NUNITO,
    h1: {
      fontSize: FONT.SIZES[28],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.BOLD,
    },
    h2: {
      fontSize: FONT.SIZES[24],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.MEDIUM,
    },
    h3: {
      fontSize: FONT.SIZES[22],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.BOLD,
    },
    h4: {
      fontSize: FONT.SIZES[20],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR,
    },
    h5: {
      fontSize: FONT.SIZES[16],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR,
    },
    h6: {
      fontSize: FONT.SIZES[14],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR,
    },
  },
});

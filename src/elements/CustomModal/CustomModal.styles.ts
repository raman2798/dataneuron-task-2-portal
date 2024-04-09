import { IconButton, Stack, styled } from '@mui/material';
import { BORDERS, COLORS } from '@/theme';
import { ModalContainerProps } from './CustomModal.types';

const CUSTOM_MODAL_MARGIN_IN_REM = 4;

export const ModalContainer = styled(Stack)<ModalContainerProps>`
  flex-direction: ${({ direction }) => direction || 'column'};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${COLORS.WHITE};
  box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  overflow-x: hidden;
  outline: none;
  max-width: calc(100vw - ${CUSTOM_MODAL_MARGIN_IN_REM}rem);
  max-height: calc(100vh - ${CUSTOM_MODAL_MARGIN_IN_REM}rem);
  . MuiBackdrop-root-MuiModal-backdrop {
    background-color: red;
  }

  & .errorstack {
    border: none;
  }
`;

export const MainContainer = styled(Stack)`
  flex-grow: 1;
  ${({ theme }) => theme.mixins.flexboxOverflowHack}
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: ${({ theme }) => theme.spacing(1)};
  right: ${({ theme }) => theme.spacing(3)};
`;

export const FooterContainer = styled(Stack)`
  min-height: 4.25rem;
  max-height: 4.25rem;
  background-color: ${COLORS.WHITE};
  border-top: ${BORDERS.BORDER_2};
  padding: ${({ theme }) => theme.spacing(3)};
`;

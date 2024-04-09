import { Modal as MuiModal, SvgIcon } from '@mui/material';
import { ClearOutlined } from '@mui/icons-material';
import { ModalProps } from './CustomModal.types';
import { ModalContainer, FooterContainer, MainContainer, CloseButton } from './CustomModal.styles';

export const CustomModal = ({ width, height, direction, modalStyles, children, footerContent, footerContentProps, ...props }: ModalProps) => (
  <MuiModal
    {...props}
    sx={{
      '& .MuiBackdrop-root': {
        backgroundColor: 'rgba(0, 0, 1, 0.2)',
      },
    }}
  >
    <ModalContainer width={width} height={height} direction={direction} sx={{ ...modalStyles }}>
      <CloseButton color="inherit" onClick={(e) => props.onClose && props.onClose(e, 'backdropClick')} sx={{ mt: 1.5 }}>
        <SvgIcon
          inheritViewBox
          component={ClearOutlined}
          sx={{
            width: '1.5rem',
            height: '1.5rem',
          }}
        />
      </CloseButton>
      <MainContainer>{children}</MainContainer>
      {footerContent && (
        <FooterContainer direction="row" {...footerContentProps}>
          {footerContent}
        </FooterContainer>
      )}
    </ModalContainer>
  </MuiModal>
);

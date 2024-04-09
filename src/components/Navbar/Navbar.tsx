import { FC, ReactElement } from 'react';
import { Box, Toolbar } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { CustomButton } from '@/elements';
import { NavbarProps } from './Navbar.types';

const Navbar: FC<NavbarProps> = ({ onToggle }): ReactElement => {
  const mnuNavbarHeight = document.getElementById('sidebarMnuHeader')?.clientHeight;

  return (
    <Box
      sx={{
        width: '100%',
        height: mnuNavbarHeight,
        boxShadow: 2,
        backgroundColor: (theme) => theme.palette.secondary.main,
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CustomButton onClick={onToggle}>
          <MenuIcon
            sx={{
              color: (theme) => theme.palette.primary.main,
              '&:focus': { outline: 'none' },
              '&:hover': {},
            }}
          />
        </CustomButton>

        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </Box>
  );
};

export { Navbar };

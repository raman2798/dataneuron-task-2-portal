import { FC, ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, MenuItem, Sidebar, SubMenu, menuClasses } from 'react-pro-sidebar';
import { get, includes, map } from 'lodash';
import { COLORS, dataNeuronTheme } from '@/theme';
import { sidebarItems } from './Sidebar.items';
import { StyledLogo, StyledName } from './Sidebar.style';
import { SideBarProps, SidebarItem } from './Sidebar.types';
import { CustomTooltip, CustomTooltipEnums } from '@/elements';

const { BLACK, GREY_4, ORANGE, WHITE } = COLORS;

const { TooltipPlacement } = CustomTooltipEnums;

const activeMenuItemStyle = (path: string, currentPath: string) => {
  return {
    [`.${menuClasses.button}`]: {
      backgroundColor: `${WHITE} !important`,
      color: includes(currentPath, path) ? `${ORANGE} !important` : 'transparent',
      '&:hover': {
        backgroundColor: `${GREY_4} !important`,
        color: `${WHITE} !important`,
      },
    },
  };
};

const activeSubMenuStyle = (path: string, currentPath: string) => {
  return {
    [`& > .${menuClasses.button}`]: {
      color: includes(currentPath, path) ? `${ORANGE} !important` : 'transparent',
      '&:hover': {
        color: `${ORANGE} !important`,
      },
    },
  };
};

const SideBar: FC<SideBarProps> = ({ isCollapsed, isToggled, onToggle }): ReactElement => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleMenuItemClick = (path: string) => {
    navigate(path);
  };

  const renderSubMenu = (item: SidebarItem, index: number): ReactElement | null => {
    const { title, path, icon, subMenu } = item;

    const submenuItems = map(subMenu, (subItem, indexItem) => {
      const subPath = `${path}${get(subItem, 'path')}`;

      return (
        <MenuItem key={indexItem} icon={get(subItem, 'icon')} onClick={() => handleMenuItemClick(subPath)} rootStyles={activeMenuItemStyle(subPath, currentPath)}>
          {get(subItem, 'title')}
        </MenuItem>
      );

      return null;
    });

    return isCollapsed ? (
      <CustomTooltip key={index} title={title} placement={TooltipPlacement.RIGHT_START}>
        <SubMenu icon={icon} label={title} rootStyles={activeSubMenuStyle(path, currentPath)}>
          {submenuItems}
        </SubMenu>
      </CustomTooltip>
    ) : (
      <SubMenu key={index} icon={icon} label={title} rootStyles={activeSubMenuStyle(path, currentPath)}>
        {submenuItems}
      </SubMenu>
    );
  };

  const renderMenu = (item: SidebarItem, index: number): ReactElement | null => {
    const { title, path, icon } = item;

    return isCollapsed ? (
      <CustomTooltip key={index} title={title} placement={TooltipPlacement.RIGHT_START}>
        <MenuItem icon={icon} onClick={() => handleMenuItemClick(path)} rootStyles={activeMenuItemStyle(path, currentPath)}>
          {title}
        </MenuItem>
      </CustomTooltip>
    ) : (
      <MenuItem key={index} icon={icon} onClick={() => handleMenuItemClick(path)} rootStyles={activeMenuItemStyle(path, currentPath)}>
        {title}
      </MenuItem>
    );
  };

  const renderMenuItem = (item: SidebarItem, index: number): ReactElement | null => {
    const { subMenu } = item;

    return subMenu ? renderSubMenu(item, index) : renderMenu(item, index);

    return null;
  };

  return (
    <Sidebar
      collapsed={isCollapsed}
      toggled={isToggled}
      onBackdropClick={onToggle}
      rtl={false}
      breakPoint="sm"
      transitionDuration={800}
      style={{ height: '100vh' }}
      backgroundColor={WHITE}
      rootStyles={{
        color: BLACK,
      }}
    >
      <StyledLogo>
        <StyledName>
          <span>D</span>
        </StyledName>
      </StyledLogo>

      <Menu
        closeOnClick
        rootStyles={{
          [`& .${menuClasses.button}`]: {
            '&:hover': {
              backgroundColor: dataNeuronTheme.palette.secondary.main,
              color: `${BLACK} !important`,
            },
          },
        }}
      >
        {map(sidebarItems, (item, index) => renderMenuItem(item, index))}
      </Menu>
    </Sidebar>
  );
};

export { SideBar };

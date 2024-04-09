import { CSSObject } from '@emotion/styled';

export type MenuItemStylesParams = {
  level: number;
  disabled: boolean;
  active: boolean;
  isSubmenu: boolean;
  open?: boolean;
};

export type ElementStyles = CSSObject | ((params: MenuItemStylesParams) => CSSObject | undefined);

export type MenuItemStyles = {
  root?: ElementStyles;
  button?: ElementStyles;
  label?: ElementStyles;
  prefix?: ElementStyles;
  suffix?: ElementStyles;
  icon?: ElementStyles;
  subMenuContent?: ElementStyles;
  SubMenuExpandIcon?: ElementStyles;
};

export type SideBarProps = {
  isCollapsed: boolean;
  isToggled: boolean;
  onToggle: () => void;
};

type SubMenu = {
  title: string;
  path: string;
  icon: JSX.Element;
};

export type SidebarItem = SubMenu & {
  subMenu?: SubMenu[];
};

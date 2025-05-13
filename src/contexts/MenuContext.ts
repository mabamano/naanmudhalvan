import { createContext, useContext } from 'react';

interface MenuContextProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const MenuContext = createContext<MenuContextProps>({
  sidebarOpen: false,
  toggleSidebar: () => {},
});

export const useMenu = () => useContext(MenuContext);
import React from 'react';
import MenuItem from './MenuItem';
import menuData from './config';

const MenuItemList = ({ handleMenuClick, submenuOpen }) => (
  <>
    {menuData.map((menu) => (
      <MenuItem
        key={menu.key}
        label={menu.label}
        hasSubmenu={!!menu.items}
        menuKey={menu.key}
        handleMenuClick={handleMenuClick}
        submenuOpen={submenuOpen}
      />
    ))}
  </>
);

export default MenuItemList;

import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

const AdminMenu = () => (
  <Menu theme="dark" mode="inline">
    {/* Jemaat */}
    <SubMenu key="jemaat" title={<span>Jemaat</span>}>
      <Menu.Item key="lingkungan">
        <NavLink to="/lingkungan">Lingkungan</NavLink>
      </Menu.Item>
      <Menu.Item key="lingkungan-gabungn">
        <NavLink to="/jemaat">Lingkungan Gabungan</NavLink>
      </Menu.Item>
      <Menu.Item key="list-jemaat">
        <NavLink to="/jemaat">Jemaat</NavLink>
      </Menu.Item>
    </SubMenu>

    {/* Diaken */}
    <SubMenu key="Diaken" title={<span>Pelayan</span>}>
      <Menu.Item key="list-pelayan">
        <NavLink to="/diaken">Daftar Pelayan</NavLink>
      </Menu.Item>
      <Menu.Item key="list-snk">
        <NavLink to="/diaken/snk"> Satua Niha Keriso</NavLink>
      </Menu.Item>
      <Menu.Item key="list-diaken-staff">
        <NavLink to="/diaken/staff">Staff</NavLink>
      </Menu.Item>
    </SubMenu>

  </Menu>
);
export default AdminMenu;

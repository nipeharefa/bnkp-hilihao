import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

export default class DefaultMenu extends Component {
  render() {
    return (
      <Menu theme="dark" mode="inline">
        {/* Jemaat */}
        <SubMenu key="jemaat" title={<span>Jemaat</span>}>
          <Menu.Item key="list-jemaat">
            <NavLink to="/jemaat">Daftar Jemaat</NavLink>
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
  }
}

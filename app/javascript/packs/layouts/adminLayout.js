import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AdminNav from 'packs/router/adminNavigation';
import _ from 'lodash';
import { Layout, Menu, Icon } from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;
import DefaultMenu from 'packs/menu/adminMenu';

export default class AdminLayout extends Component {
  render() {
    const routes = _.map(AdminNav, (nav, index) => (
      <Route exact path={nav.path} component={(nav.component)} key={index} />
    ));
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className="logo" />
          <DefaultMenu />
        </Sider>

        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Switch>
                { routes }
                <Redirect to="/" />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Gereja BNKP Jemaat Hilihao
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

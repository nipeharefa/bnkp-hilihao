import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import _ from 'lodash';
import { Layout } from 'antd';
import AdminNav from '../router/adminNavigation';
import DefaultMenu from '../menu/adminMenu';

const {
  Header, Content, Footer, Sider,
} = Layout;

export default class AdminLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const routes = _.map(AdminNav, (nav, index) => (
      <Route exact path={nav.path} component={(nav.component)} key={index} />
    ));
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
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

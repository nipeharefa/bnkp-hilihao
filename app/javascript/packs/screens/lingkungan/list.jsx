import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'packs/lib/axiosWrapped';

export default class ListLingkungan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lingkungan: [],
      tableSettings: {
        loading: false,
        pagination: {
          pageSize: 50,
        },
      },
    };
  }
  componentDidMount() {
    this.getLingkunganData();
  }
  getLingkunganData() {
    axios.get(window.Routes.lingkungan_index_path()).then((x) => {
      this.setState({ lingkungan: x.data.entries });
      this.showLoadingTable(false);
    }).catch(() => {
      this.showLoadingTable(false);
    });
  }
  showLoadingTable(show) {
    this.setState({ tableSettings: { loading: show } });
  }
  render() {
    const renderContent = (value, row, index) => {
      const obj = {
        children: `Lingkungan-${value}`,
        props: {},
      };
      return obj;
    };
    const columns = [{
      title: 'Nama',
      dataIndex: 'name',
      key: 'name',
      render: renderContent,
    }, {
      title: 'Lingkungan Gabungan',
      dataIndex: 'gabungan',
      key: 'gabungan',
    }];
    return (
      <div>
        <NavLink to="/lingkungan/create">
          <Button type="primary" icon="user-add">Tambah Data Lingkungan</Button>
        </NavLink>
        <br />
        <Table
          rowKey="id"
          dataSource={this.state.lingkungan}
          columns={columns}
          {...this.state.tableSettings}
        />
      </div>
    );
  }
}

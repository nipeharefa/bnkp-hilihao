import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { NavLink } from 'react-router-dom';

export default class ListGabungan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableSettings: {
        loading: false,
        pagination: {
          pageSize: 50,
        },
      },
      gabungan: [],
    };
  }
  componentDidMount() {}
  render() {
    const columns = [{
      title: 'Nama',
      dataIndex: 'name',
      key: 'name',
    }];

    return (
      <div>
        <NavLink to="/jemaat/create">
          <Button type="primary" icon="user-add">Tambah Data Lingkungan Gabungan</Button>
        </NavLink>
        <Table
          rowKey="id"
          dataSource={this.state.gabungan}
          columns={columns}
          {...this.state.tableSettings}
        />
      </div>
    );
  }
}

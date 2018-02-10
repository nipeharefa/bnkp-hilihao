import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'packs/lib/axiosWrapped';

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
  componentDidMount() {
    this.getGabunganData();
  }
  getGabunganData() {
    axios.get(window.Routes.gabungan_index_path()).then((x) => {
      this.setState({ gabungan: x.data.entries });
      this.showLoadingTable(false);
    }).catch(() => {
      this.showLoadingTable(false);
    });
  }
  showLoadingTable(show) {
    this.setState({ tableSettings: { loading: show } });
  }
  render() {
    const columns = [{
      title: 'Nama',
      dataIndex: 'name',
      key: 'name',
    }];

    return (
      <div>
        <NavLink to="/lingkungan-gabungan/create">
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

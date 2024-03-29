import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'packs/lib/axiosWrapped';

export default class ListJemaat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableSettings: {
        loading: false,
        pagination: {
          pageSize: 50,
        },
      },
      jemaat: [],
    };
  }
  componentDidMount() {
    this.showLoadingTable(true);
    axios.get(window.Routes.congregation_index_path()).then((x) => {
      this.setState({ jemaat: x.data.entries });
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
      render: (text, record) => (
        <NavLink to={`/jemaat/${record.id}`}>{text}</NavLink>
      ),
    }, {
      title: 'Tempat Lahir',
      dataIndex: 'place_of_birth',
      key: 'place_of_birth',
    }, {
      title: 'Tanggal Lahir',
      dataIndex: 'date_of_birth',
      key: 'date_of_birth',
    }, {
      title: 'Jenis Kelamin',
      dataIndex: 'gender',
      key: 'gender',
    }];

    return (
      <div>
        <NavLink to="/jemaat/create">
          <Button type="primary" icon="user-add">Tambah Data Jemaat</Button>
        </NavLink>
        <br />
        <Table
          rowKey="id"
          dataSource={this.state.jemaat}
          columns={columns}
          {...this.state.tableSettings}
        />
      </div>
    );
  }
}

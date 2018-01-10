import React, { Component } from 'react'
import { Table, Button } from 'antd';
import axios from 'packs/lib/axiosWrapped'
import { NavLink } from 'react-router-dom'

export default class ListJemaat extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      tableSettings: {
        loading: false,
        pagination: {
          pageSize: 25,
        }
      },
      jemaat: []
    }
  }
  showLoadingTable(show)
  {
    this.setState({ tableSettings: { loading: show }})
  }
  componentDidMount() {
    this.showLoadingTable(true)
    axios.get(window.Routes.congregation_index_path()).then(x => {
      this.setState( { jemaat: x.data.entries })
      console.log(x.data.entries)
      this.showLoadingTable(false)
    }).catch(err => {
      this.showLoadingTable(false)
    })
  }
  render() {
    const columns = [{
      title: 'Nama',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <NavLink to={`jemaat/${record.id}`}>{text}</NavLink>
      )
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
      key: 'gender'
    }];

    return (
      <div>
        <NavLink to="/jemaat/create">
          <Button type="primary" icon="user-add">Tambah Data Jemaat</Button>
        </NavLink>
        <br />
        <Table rowKey="id"
          dataSource={this.state.jemaat} columns={columns} {...this.state.tableSettings} />
      </div>
    )
  }
}

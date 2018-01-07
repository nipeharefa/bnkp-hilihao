import React, { Component } from 'react'
import { Table } from 'antd';
import axios from 'packs/lib/axiosWrapped'

export default class ListSNK extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      snk: [],
      tableSettings: {
        loading: false
      }
    }
  }
  showLoadingTable(show) 
  {
    this.setState({ tableSettings: { loading: show }})
  }
  componentDidMount()
  {
    this.showLoadingTable(true)
    axios.get(window.Routes.diaken_index_path()).then(x => {
      // this.setState( { jemaat: x.data.entries })
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
      <Table rowKey="id" 
        dataSource={this.state.snk} columns={columns} {...this.state.tableSettings} />
    )
  }
}
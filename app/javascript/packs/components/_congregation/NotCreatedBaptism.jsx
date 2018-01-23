import React, { Component } from 'react'
import { Button } from 'antd';

export default class NotCreatedBaptism extends Component
{
  render() {
    return (
      <div className="baptis-no-created">
        <h3>Belum tersedia untuk jemaat ini.</h3>
        <Button type="primary" icon="file-add" size="small">Tambah</Button>
      </div>
    )
  }
}
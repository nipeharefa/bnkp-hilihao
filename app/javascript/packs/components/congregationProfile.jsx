import React, { Component } from 'react'
import { Row, Col } from 'antd'
import asyncComponent from 'packs/lib/asyncComponent'
// import all partial
const BasicDisplay = asyncComponent(() =>
  System.import('packs/components/_congregation/BasicDisplay').then(module => module.default)
)
const Baptism = asyncComponent(() =>
  System.import('packs/components/_congregation/Baptis').then(module => module.default)
)

export default class CongregationProfile extends Component
{
  constructor(props) {
    super(props)
  }
  render() {
    const { congregation } = this.props
    const birth = `${congregation.place_of_birth}, ${congregation.date_of_birth}`
    return (
      <div>
        <Row gutter={8}>
          <p>Data diri</p>
          <hr />
          <Col span={8}>
            <BasicDisplay keyProfile="Nama Lengkap" valueProfile={congregation.name}/>
            <BasicDisplay keyProfile="Tempat, Tanggal Lahir" valueProfile={birth}/>
            <BasicDisplay keyProfile="Jenis Kelamin" valueProfile={congregation.gender}/>
          </Col>
          <Col span={8}>
            <BasicDisplay keyProfile="Tanggal Baptis" valueProfile={congregation.name}/>
            <BasicDisplay keyProfile="Tanggal Sidi" valueProfile={congregation.name}/>
          </Col>
          <Col span={8}>
            <BasicDisplay keyProfile="Pelayanan Terakhir" valueProfile={congregation.name}/>
          </Col>
        </Row>
        <Row gutter={8}>
          <p>Informasi Baptis</p>
          <hr />
          <Baptism baptism={congregation.baptism}/>
        </Row>
        <Row gutter={8}>
          <p>Informasi Sidi</p>
          <hr />
        </Row>
      </div>
    )
  }
}

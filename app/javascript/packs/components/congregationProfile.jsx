import React, { Component } from 'react'
import { Row, Col } from 'antd'

export default class CongregationProfile extends Component
{
  constructor(props) {
    super(props)
  }
  render() {
    const { congregation } = this.props
    return (
      <div>
        <Row gutter={8}>
          <Col span={8}>
            <p className="keyprofile">Nama / Name</p>
            <p className="valueprofile">{congregation.name}</p>
          </Col>
          <Col span={8} />
          <Col span={8} />
        </Row>
      </div>
    )
  }
}

import React, { Component } from 'react'

import asyncComponent from 'packs/lib/asyncComponent'
// import all partial
const BasicDisplay = asyncComponent(() =>
  System.import('./BasicDisplay').then(module => module.default)
)
export default class Baptis extends Component
{
  render()
  {
    const { baptism } = this.props
    return (
      <div>
        <BasicDisplay keyProfile="Nomor Surat Baptisan" valueProfile={baptism.baptism_number} />
        <BasicDisplay keyProfile="Pendeta Pelayan" valueProfile={baptism.pastor} />
        <BasicDisplay keyProfile="Nama Lengkap" valueProfile={baptism.church_name} />
      </div>
    )
  }
}

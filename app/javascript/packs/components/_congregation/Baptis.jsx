import React, { Component } from 'react';

/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import asyncComponent from 'packs/lib/asyncComponent';
// import all partial
const BasicDisplay = asyncComponent(() =>
  System.import('./BasicDisplay').then(module => module.default), // eslint-disable-line no-alert
);
export default class Baptis extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { baptism } = this.props;
    return (
      <div>
        <BasicDisplay keyProfile="Nomor Surat Baptisan" valueProfile={baptism.baptism_number} />
        <BasicDisplay keyProfile="Pendeta Pelayan" valueProfile={baptism.pastor} />
        <BasicDisplay keyProfile="Nama Lengkap" valueProfile={baptism.church_name} />
      </div>
    );
  }
}

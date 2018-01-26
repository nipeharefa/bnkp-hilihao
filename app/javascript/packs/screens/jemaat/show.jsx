import React, { Component } from 'react';
import { Spin } from 'antd';
import axios from 'packs/lib/axiosWrapped';
import CongregationProfile from 'packs/components/congregationProfile';

export default class ShowJemaat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_uuid: null,
      congregation: null,
      isParsed: false
    };
  }
  componentDidMount() {
    const { match } = this.props;

    if (!match.params.id) {
      return;
    }

    const congregationId = match.params.id;
    axios.get(window.Routes.congregation_path({ id: congregationId })).then((x) => {
      this.setState({ congregation: x.data, isParsed: true });
    });
  }
  render() {
    const Congregation = () => {
      if (this.state.congregation) {
        return <CongregationProfile congregation={this.state.congregation} />;
      }
      return <Spin />;
    };
    return (
      <div>
        <Congregation />
      </div>
    );
  }
}

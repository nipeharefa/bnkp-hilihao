import React, { Component } from 'react';
import { Form } from 'antd';
import axios from 'packs/lib/axiosWrapped';

const FormItem = Form.Item;

class NewGabungan extends Component {
  handlePostData = () => {
    axios.post();
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Form>
        </Form>
      </div>
    );
  }
}

const NewGabunganForm = Form.create()(NewGabungan);
export default NewGabunganForm;

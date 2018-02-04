import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'packs/lib/axiosWrapped';

const FormItem = Form.Item;

class NewGabungan extends Component {
  handlePostData = (data) => {
    const { history } = this.props;
    axios.post(window.Routes.gabungan_index_path(), data).then(() => {
      history.push('/lingkungan-gabungan');
    }).catch(err => err);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = {
          lingkungan: values,
        };
        this.handlePostData(data);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="Nama Gabungan Lingkungan">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Masukkan nama gabungan lingkungan !' }],
            })(<Input placeholder="Nama Lingkungan" />)}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Simpan
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const NewGabunganForm = Form.create()(NewGabungan);
export default NewGabunganForm;

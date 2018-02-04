import React, { Component } from 'react';
import axios from 'packs/lib/axiosWrapped';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class CreateLingkungan extends Component {
  componentDidMount() {}
  handlePostData = (data) => {
    const { history } = this.props;
    axios.post(window.Routes.lingkungan_index_path(), data).then(() => {
      history.push('/lingkungan');
    }).catch(err => err);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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
          {/* Nama Lengkap */}
          <FormItem label="Nama Lengkap">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Masukkan nama lingkungan !' }],
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


const CreateLingkunganForm = Form.create()(CreateLingkungan);
export default CreateLingkunganForm;

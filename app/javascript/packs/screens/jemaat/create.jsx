import React, { Component } from 'react';
import axios from 'packs/lib/axiosWrapped';
import { Form, Input, Button, DatePicker, Radio, Select } from 'antd';

const FormItem = Form.Item;
// const { Group as RadioGroup, RadioButton } = Radio
const RadioGroup = Radio.Group;
const { Option } = Select;

class CreateNewJemaat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lingkungan: [],
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }
  componentDidMount() {
    this.getDataLingkungan();
  }
  getDataLingkungan = (data) => {
    axios.get(window.Routes.lingkungan_index_path()).then((response) => {
      this.setState({ lingkungan: response.data.entries });
    });
  }
  handleNumberChange = (value) => {
    this.props.form.setFieldsValue({
      lingkungan_id: value,
    });
  }
  handlePostData = (data) => {
    const { history } = this.props;
    axios.post(window.Routes.congregation_index_path(), data).then((x) => {
      history.push(`/jemaat/${x.data.id}`);
    }).catch(err => err);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const data = {
          congregation: values,
        };
        this.handlePostData(data);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const config = {
      rules: [{ type: 'object', required: true, message: 'Mohon isi tanggal lahir!' }],
    };
    const lingkunganConfig = {
      rules: [{ required: true, message: 'Pilih lingkungan!' }],
    };
    const genderConfig = {
      rules: [{ required: true, message: 'Pilih salah satu!' }],
    };
    const listLingkungan = this.state.lingkungan.map(item => (
      <Option value={item.id} key={item.id}>{item.name}</Option>
    ));
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          {/* Nama Lengkap */}
          <FormItem label="Nama Lengkap">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Masukkan nama !' }],
            })(<Input placeholder="Nama Jemaat" />)}
          </FormItem>
          {/* Lingkungan select */}
          <FormItem label="Lingkungan">
            {getFieldDecorator('lingkungan_id', lingkunganConfig)(
              <Select
                placeholder="Pilih lingkungan"
                onChange={this.handleNumberChange}
              >
                {listLingkungan}
              </Select>,
            )}
          </FormItem>
          {/* Place of birth */}
          <FormItem label="Tempat Lahir">
            {getFieldDecorator('place_of_birth', {
              rules: [{ required: true, message: 'Masukkan Tempat Lahir !' }],
            })(<Input placeholder="Tempat Lahir" />)}
          </FormItem>
          {/* Date of Birth */}
          <FormItem label="Tanggal Lahir">
            {getFieldDecorator('date_of_birth', config)(<DatePicker />)}
          </FormItem>
          {/* Gender */}
          <FormItem label="Jenis Kelamin">
            {getFieldDecorator('gender', genderConfig)(
              <RadioGroup>
                <Radio value="man">Pria</Radio>
                <Radio value="woman">Wanita</Radio>
              </RadioGroup>,
            )}
          </FormItem>
          {/* Submit */}
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

const CreateJemaatForm = Form.create()(CreateNewJemaat);
export default CreateJemaatForm;

import React, { Component } from 'react'
import axios from 'packs/lib/axiosWrapped'
import {
  Form, Icon, Input, Button, DatePicker, Radio,
  Spin
} from 'antd'
const FormItem = Form.Item
// const { Group as RadioGroup, RadioButton } = Radio
const RadioGroup = Radio.Group
const RadioButton = Radio.Button

class CreateNewJemaat extends Component
{
  constructor(props)
  {
    super(props)
  }
  handlePostData(data)
  {
    const { history } = this.props

    axios.post(window.Routes.congregation_index_path(), data).then( x => {
      history.push(`/jemaat/${x.data.id}`)
    }).catch(err => err)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const data = {
          congregation: values
        }
        this.handlePostData(data)
      }
    })
  }
  render()
  {
    const { getFieldDecorator } = this.props.form;
    const config = {
      rules: [{ type: 'object', required: true, message: 'Mohon isi tanggal lahir!' }],
    };
    const genderConfig = {
      rules: [{ required: true, message: 'Pilih salah satu!'}]
    }
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Masukkan nama !' }],
            })(
              <Input placeholder="Nama Jemaat" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('place_of_birth', {
              rules: [{ required: true, message: 'Masukkan Tempat Lahir !' }],
            })(
              <Input placeholder="Tempat Lahir" />
            )}
          </FormItem>
          {/* Date of Birth */}
          <FormItem
            label="DatePicker">
            {getFieldDecorator('date_of_birth', config)(
              <DatePicker />
            )}
          </FormItem>
          {/* Gender */}
          <FormItem
            label="Jenis Kelamin"
            >
            {getFieldDecorator('gender', genderConfig)(
              <RadioGroup>
                <Radio value="man">Pria</Radio>
                <Radio value="woman">Wanita</Radio>
              </RadioGroup>
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
    )
  }
}

const CreateJemaatForm = Form.create()(CreateNewJemaat)
export default CreateJemaatForm

import React, { useState } from 'react'
import { Form, Select, Modal } from 'antd'
import InputItem from '../../components/InputItem'

function TaoMoiThietDatNguoiDung ({
  form,
  addVisible,
  setAddVisible,
  addUser,
  coQuanHanhChinh
}) {
  const [donVi, setDonVi] = useState('')
  const handleChange = val => {
    console.log(val)
    setDonVi(val)
  }
  return (
    <>
      <Modal
        title='TẠO MỚI NGƯỜI DÙNG'
        visible={addVisible}
        onOk={() => {
          setAddVisible(false)
          form.validateFields((err, values) => {
            if (err) {
              return
            }
            form.resetFields()
            addUser({
              coQuanHanhChinhId: donVi,
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              login: values.userName
            })
          })
        }}
        onCancel={() => {
          setAddVisible(false)
        }}
      >
        <Form>
          <InputItem
            form={form}
            label='Họ Người Dùng:'
            field='firstName'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          <InputItem
            form={form}
            label='Tên Người Dùng:'
            field='lastName'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          <InputItem
            form={form}
            label='Tên Đăng Nhập:'
            field='userName'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          <InputItem
            form={form}
            label='Email'
            field='email'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' },
              {
                type: 'email',
                message: 'Nhập đúng định dạng email aaa@gmail.com'
              }
            ]}
          />
          <Form.Item label='Đơn vị'>
            <Select onChange={handleChange}>
              {coQuanHanhChinh &&
                coQuanHanhChinh.map((item, i) => (
                  <Select.Option key={i} value={item.id}>
                    {item.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default Form.create({ name: 'form_modal' })(TaoMoiThietDatNguoiDung)

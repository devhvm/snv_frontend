import React from 'react'
import { Form, Select, Modal } from 'antd'
import InputItem from '../../components/InputItem'

function TaoMoiThietDatNguoiDung ({
  form,
  addVisible,
  setAddVisible,
  addUser,
  coQuanHanhChinhList
}) {
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
              coQuanHanhChinhId: values.donVi,
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
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          <InputItem
            form={form}
            label='Đơn vị'
            field='donVi'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
            type='select'
            options={
              coQuanHanhChinhList &&
              coQuanHanhChinhList.map((item, i) => (
                <Select.Option key={i} value={item.id}>
                  {item.name}
                </Select.Option>
              ))
            }
          />
        </Form>
      </Modal>
    </>
  )
}

export default Form.create({ name: 'form_modal' })(TaoMoiThietDatNguoiDung)

import React from 'react'
import { Form, Modal, Select } from 'antd'
import InputItem from '../../../components/InputItem'

function TaoMoiPhanTo ({ form, addVisible, setAddVisible, addPhanTo }) {
  const statusList = [
    {
      value: 'PUBLISH'
    },
    {
      value: 'UNPUBLISH'
    },
    {
      value: 'DELETE'
    }
  ]
  return (
    <>
      <Modal
        title='TẠO MỚI PHÂN TỔ'
        visible={addVisible}
        onOk={() => {
          setAddVisible(false)
          form.validateFields((err, values) => {
            if (err) {
              return
            }
            form.resetFields()
            addPhanTo({
              nhomDanhMucCode: values.nhomDanhMucCode,
              name: values.name,
              status: values.status
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
            label='Mã phân tổ'
            field='nhomDanhMucCode'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          <InputItem
            form={form}
            label='Tên phân tổ'
            field='name'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          <InputItem
            form={form}
            label='Status'
            field='status'
            type='select'
            options={
              statusList &&
              statusList.map((item, index) => (
                <Select.Option key={index} value={item.value}>
                  {item.value}
                </Select.Option>
              ))
            }
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
        </Form>
      </Modal>
    </>
  )
}
export default Form.create({ name: 'form_modal' })(TaoMoiPhanTo)

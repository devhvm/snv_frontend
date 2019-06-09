import React from 'react'
import { Form, Modal, Select } from 'antd'
import InputItem from '../../../components/InputItem'

function TaoMoiChiTieu ({ form, addVisible, setAddVisible, addNhomChiTieu }) {
  const handleOk = () => {
    setAddVisible(false)
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      form.resetFields()
      addNhomChiTieu({
        nhomChiTieuCode: values.nhomChiTieuCode,
        name: values.name,
        status: values.status
      })
    })
  }

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
        title='TẠO MỚI NHÓM CHỈ TIÊU'
        visible={addVisible}
        onOk={handleOk}
        onCancel={() => {
          setAddVisible(false)
        }}
      >
        <Form>
          <InputItem
            form={form}
            label='Mã nhóm chỉ tiêu'
            field='nhomChiTieuCode'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          <InputItem
            form={form}
            label='Tên nhóm chỉ tiêu'
            field='name'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          <InputItem
            form={form}
            label='Mã định danh'
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

export default Form.create({ name: 'form_modal' })(TaoMoiChiTieu)

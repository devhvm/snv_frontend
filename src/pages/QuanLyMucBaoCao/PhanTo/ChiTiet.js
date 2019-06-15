import React from 'react'
import { Form, Modal, Select } from 'antd'
import InputItem from '../../../components/InputItem'

function ChiTietChiTieu ({
  form,
  editVisible,
  setEditVisible,
  phanToEditing,
  editPhanTo
}) {
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

  console.log(phanToEditing)

  return (
    <>
      <Modal
        title='CHI TIẾT PHÂN TỞ'
        visible={editVisible}
        onOk={() => {
          setEditVisible(false)
          form.validateFields((err, values) => {
            if (err) {
              return
            }
            form.resetFields()
            editPhanTo({
              id: values.id,
              nhomDanhMucCode: values.nhomDanhMucCode,
              name: values.name,
              status: values.status
            })
          })
        }}
        onCancel={() => {
          setEditVisible(false)
        }}
      >
        <Form>
          <InputItem
            form={form}
            type='hidden'
            initialValue={phanToEditing ? phanToEditing.id : ''}
            field='id'
          />
          <InputItem
            form={form}
            label='Mã phân tổ'
            field='nhomDanhMucCode'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
            initialValue={phanToEditing ? phanToEditing.nhomDanhMucCode : ''}
          />
          <InputItem
            form={form}
            label='Tên phân tổ'
            field='name'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
            initialValue={phanToEditing ? phanToEditing.name : ''}
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
            initialValue={phanToEditing ? phanToEditing.status : ''}
          />
        </Form>
      </Modal>
    </>
  )
}

export default Form.create({ name: 'form_modal' })(ChiTietChiTieu)

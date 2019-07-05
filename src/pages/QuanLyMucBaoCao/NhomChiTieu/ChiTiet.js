import React from 'react'
import { Form, Modal, Select } from 'antd'
import InputItem from '../../../components/InputItem'

function ChiTietCoQuanHanhChinh ({
  form,
  editVisible,
  setEditVisible,
  nhomChiTieuEditing,
  editNhomChiTieu
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

  return (
    <>
      <Modal
        title='CHI TIẾT NHÓM CHỈ TIÊU'
        visible={editVisible}
        onOk={() => {
          setEditVisible(false)
          form.validateFields((err, values) => {
            if (err) {
              return
            }
            form.resetFields()
            editNhomChiTieu({
              nhomChiTieuCode: values.nhomChiTieuCode,
              name: values.name,
              status: values.status,
              id: values.id
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
            initialValue={nhomChiTieuEditing ? nhomChiTieuEditing.id : ''}
            field='id'
          />
          <InputItem
            form={form}
            label='Mã nhóm chỉ tiêu'
            field='nhomChiTieuCode'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
            initialValue={
              nhomChiTieuEditing ? nhomChiTieuEditing.nhomChiTieuCode : ''
            }
          />
          <InputItem
            form={form}
            label='Tên nhóm chỉ tiêu'
            field='name'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
            initialValue={nhomChiTieuEditing ? nhomChiTieuEditing.name : ''}
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
            initialValue={nhomChiTieuEditing ? nhomChiTieuEditing.status : ''}
          />
        </Form>
      </Modal>
    </>
  )
}

export default Form.create({ name: 'form_modal' })(ChiTietCoQuanHanhChinh)

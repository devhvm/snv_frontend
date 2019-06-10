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

  return (
    <>
      <Modal
        title='CHI TIẾT CHỈ TIÊU'
        visible={editVisible}
        onOk={() => {
          setEditVisible(false)
          form.validateFields((err, values) => {
            if (err) {
              return
            }
            form.resetFields()
            editPhanTo({
              nhomChiTieuId: values.nhomChiTieuId,
              name: values.name,
              status: values.status,
              id: values.id,
              chiTieuCode: values.chiTieuCode
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
            label='Mã nhóm chỉ tiêu'
            field='nhomChiTieuId'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
            initialValue={phanToEditing ? phanToEditing.nhomChiTieuId : ''}
          />
          <InputItem
            form={form}
            label='Mã chỉ tiêu'
            field='chiTieuCode'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
            initialValue={phanToEditing ? phanToEditing.chiTieuCode : ''}
          />
          <InputItem
            form={form}
            label='Tên chỉ tiêu'
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

import React from 'react'
import { Form, Modal, Select } from 'antd'
import InputItem from '../../components/InputItem'

function ChiTietChiTieu ({
  form,
  editVisible,
  setEditVisible,
  chiTieuEditing,
  editChiTieu
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
        title='CHI TIẾT HẠNG MỤC'
        visible={editVisible}
        onOk={() => {
          setEditVisible(false)
          form.validateFields((err, values) => {
            if (err) {
              return
            }
            form.resetFields()
            editChiTieu({
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
            initialValue={chiTieuEditing ? chiTieuEditing.id : ''}
            field='id'
          />
          <InputItem
            form={form}
            label='Mã nhóm chỉ tiêu'
            field='nhomChiTieuId'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
            initialValue={chiTieuEditing ? chiTieuEditing.nhomChiTieuId : ''}
          />
          <InputItem
            form={form}
            label='Mã chỉ tiêu'
            field='chiTieuCode'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
            initialValue={chiTieuEditing ? chiTieuEditing.chiTieuCode : ''}
          />
          <InputItem
            form={form}
            label='Tên chỉ tiêu'
            field='name'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
            initialValue={chiTieuEditing ? chiTieuEditing.name : ''}
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
            initialValue={chiTieuEditing ? chiTieuEditing.status : ''}
          />
        </Form>
      </Modal>
    </>
  )
}

export default Form.create({ name: 'form_modal' })(ChiTietChiTieu)

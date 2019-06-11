import React from 'react'
import { Form, Modal, Select } from 'antd'
import InputItem from '../../components/InputItem'

function ChiTietTieuChi ({
  form,
  editVisible,
  setEditVisible,
  editTieuChi,
  tieuChiEditing,
  kyCongBoList,
  chiTieuList,
  coQuanChuTriList
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

  console.log(tieuChiEditing)

  return (
    <>
      <Modal
        title='TẠO MỚI TIÊU CHÍ'
        visible={editVisible}
        onOk={() => {
          setEditVisible(false)
          form.validateFields((err, values) => {
            if (err) {
              return
            }
            form.resetFields()
            editTieuChi({
              kyCongBoId: values.kyCongBoId,
              coQuanChuTriId: values.coQuanChuTriId,
              chiTieuId: values.chiTieuId,
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
            label='ID:'
            field='id'
            type='disabled'
            initialValue={tieuChiEditing ? tieuChiEditing.id : ''}
          />
          <InputItem
            form={form}
            label='Mã kì công bố'
            field='kyCongBoId'
            type='select'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
            options={
              kyCongBoList &&
              kyCongBoList.map((item, index) => (
                <Select.Option key={index} value={item.id}>
                  {item.name}
                </Select.Option>
              ))
            }
            initialValue={tieuChiEditing ? tieuChiEditing.kyCongBoId : ''}
          />
          <InputItem
            form={form}
            label='Mã cơ quan chủ trì'
            field='coQuanChuTriId'
            type='select'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
            options={
              coQuanChuTriList &&
              coQuanChuTriList.map((item, index) => (
                <Select.Option key={index} value={item.id}>
                  {item.name}
                </Select.Option>
              ))
            }
            initialValue={tieuChiEditing ? tieuChiEditing.coQuanChuTriId : ''}
          />
          <InputItem
            form={form}
            label='Mã chỉ tiêu'
            field='chiTieuId'
            type='select'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
            options={
              chiTieuList &&
              chiTieuList.map((item, index) => (
                <Select.Option key={index} value={item.id}>
                  {item.name}
                </Select.Option>
              ))
            }
            initialValue={tieuChiEditing ? tieuChiEditing.coQuanChuTriId : ''}
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
            initialValue={tieuChiEditing ? tieuChiEditing.status : ''}
          />
        </Form>
      </Modal>
    </>
  )
}
export default Form.create({ name: 'form_modal' })(ChiTietTieuChi)

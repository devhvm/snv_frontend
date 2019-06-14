import React from 'react'
import { Form, Modal, Select } from 'antd'
import InputItem from '../../components/InputItem'

function TaoMoiChiTieu ({
  form,
  addVisible,
  setAddVisible,
  addCoQuanChuTri,
  maDinhDanhList
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
        title='TẠO MỚI CƠ QUAN CHỦ TRÌ'
        visible={addVisible}
        onOk={() => {
          setAddVisible(false)
          form.validateFields((err, values) => {
            if (err) {
              return
            }
            form.resetFields()
            addCoQuanChuTri({
              maDinhDanhCode: values.maDinhDanhCode,
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
            label='Tên cơ quan chủ trì'
            field='name'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          <InputItem
            form={form}
            label='Mã định danh'
            field='maDinhDanhCode'
            type='select'
            options={
              maDinhDanhList &&
              maDinhDanhList.map((item, index) => (
                <Select.Option key={index} value={item.maDinhDanhCode}>
                  {item.name}
                </Select.Option>
              ))
            }
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

export default Form.create({ name: 'form_modal' })(TaoMoiChiTieu)

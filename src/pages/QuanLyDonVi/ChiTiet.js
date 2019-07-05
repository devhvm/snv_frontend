import React from 'react'
import { Col, Form, Row, Modal, Select } from 'antd'
import InputItem from '../../components/InputItem'

function ChiTietCoQuanHanhChinh ({
  form,
  editVisible,
  setEditVisible,
  coQuanHanhChinhEditing,
  maDinhDanhList,
  quyTrinhList,
  editCoQuanHanhChinh
}) {
  return (
    <>
      <Modal
        title='CHI TIẾT CƠ QUAN HÀNH CHÍNH'
        visible={editVisible}
        onOk={() => {
          setEditVisible(false)
          form.validateFields((err, values) => {
            if (err) {
              return
            }
            form.resetFields()
            editCoQuanHanhChinh({
              id: values.id,
              coQuanHanhChinhCode: values.coQuanHanhChinhCode,
              description: values.description,
              maDinhDanhCode: values.maDinhDanhCode,
              name: values.name,
              level: 1,
              status: 'OK'
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
            initialValue={
              coQuanHanhChinhEditing ? coQuanHanhChinhEditing.id : ''
            }
            field='id'
          />
          <Row>
            <Col span={11}>
              <InputItem
                form={form}
                label='Mã đơn vị'
                field='coQuanHanhChinhCode'
                type='disabled'
                disabled='disabled'
                initialValue={
                  coQuanHanhChinhEditing ? coQuanHanhChinhEditing.id : ''
                }
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
              <InputItem
                form={form}
                label='Tên đơn vị'
                field='name'
                initialValue={
                  coQuanHanhChinhEditing ? coQuanHanhChinhEditing.name : ''
                }
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
            </Col>
            <Col span={11} offset={2}>
              <InputItem
                form={form}
                label='Mã định danh'
                field='maDinhDanhCode'
                type='select'
                options={
                  maDinhDanhList &&
                  maDinhDanhList.map(item => (
                    <Select.Option key={item.id} value={item.maDinhDanhCode}>
                      {item.name}
                    </Select.Option>
                  ))
                }
                initialValue={
                  coQuanHanhChinhEditing
                    ? coQuanHanhChinhEditing.maDinhDanhCode
                    : ''
                }
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
              <InputItem
                form={form}
                label='Qui Trình'
                field='quiTrinh'
                type='select'
                initialValue={
                  coQuanHanhChinhEditing
                    ? coQuanHanhChinhEditing.maDinhDanhCode
                    : ''
                }
                options={
                  quyTrinhList &&
                  quyTrinhList.map(item => (
                    <Select.Option key={item.id} value={item.quyTrinhCode}>
                      {item.name}
                    </Select.Option>
                  ))
                }
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
            </Col>
          </Row>
          <InputItem
            form={form}
            label='Mô tả'
            field='description'
            type='description'
            initialValue={
              coQuanHanhChinhEditing ? coQuanHanhChinhEditing.description : ''
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

export default Form.create({ name: 'form_modal' })(ChiTietCoQuanHanhChinh)

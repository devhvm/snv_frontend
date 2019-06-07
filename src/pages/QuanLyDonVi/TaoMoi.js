import React, { Fragment } from 'react'
import { Col, Form, Row, Select, Modal } from 'antd'
import InputItem from '../../components/InputItem'

function TaoMoiCoQuanHanhChinh ({
  form,
  addVisible,
  setAddVisible,
  addCoQuanHanhChinh
}) {
  return (
    <Fragment>
      <Modal
        title='TẠO MỚI CƠ QUAN HÀNH CHÍNH'
        visible={addVisible}
        onOk={() => {
          setAddVisible(false)
        }}
        onCancel={() => {
          setAddVisible(false)
        }}
      >
        <Form>
          <Row>
            <Col span={11}>
              <InputItem
                form={form}
                label='Mã đơn vị'
                field='maDonVi'
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
              <InputItem
                form={form}
                label='Tên đơn vị'
                field='tenDonVi'
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
            </Col>
            <Col span={11} offset={2}>
              <InputItem
                form={form}
                label='Mã định danh'
                field='maDinhDanh'
                type='select'
                options={
                  <Select.Option />
                  // coQuanHanhChinhEditing &&
                  // coQuanHanhChinhEditing.map((item, i) => (
                  //   <Select.Option key={String(item.id)} value={JSON.stringify(item)}>
                  //     {item.name}
                  //   </Select.Option>
                  // ))
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
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
            </Col>
          </Row>
          <InputItem
            form={form}
            label='Mô tả'
            field='moTa'
            type='textarea'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
        </Form>
      </Modal>
    </Fragment>
  )
}

export default Form.create({ name: 'form_modal' })(TaoMoiCoQuanHanhChinh)

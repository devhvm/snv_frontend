import React from 'react'
import { Col, Form, Row, Modal, Select } from 'antd'
import InputItem from '../../components/InputItem'

function ChiTietCoQuanHanhChinh ({
  form,
  editVisible,
  setEditVisible,
  coQuanHanhChinhEditing
}) {
  return (
    <>
      <Modal
        title='CHI TIẾT CƠ QUAN HÀNH CHÍNH'
        visible={editVisible}
        onOk={() => {
          setEditVisible(false)
        }}
        onCancel={() => {
          setEditVisible(false)
        }}
      >
        <Form>
          <Row>
            <Col span={11}>
              <InputItem
                form={form}
                label='Mã đơn vị'
                field='maDonVi'
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
                field='tenDonVi'
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
                field='maDinhDanh'
                type='select'
                options={
                  <Select.Option key='1' value='item'>
                    aaa
                  </Select.Option>
                  //   coQuanHanhChinhEditing &&
                  //   coQuanHanhChinhEditing.map((item, i) => (
                  //     <Select.Option key={String(item.id)} value={JSON.stringify(item)}>
                  //       {item.name}
                  //     </Select.Option>
                  //   ))
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
                initialValue={
                  coQuanHanhChinhEditing
                    ? coQuanHanhChinhEditing.maDinhDanhCode
                    : ''
                }
                // type='select'
                // options={
                //   <Select.Option>aaa</Select.Option>
                //   coQuanHanhChinhEditing &&
                //   coQuanHanhChinhEditing.map((item, i) => (
                //     <Select.Option key={String(item.id)} value={JSON.stringify(item)}>
                //       {item.name}
                //     </Select.Option>
                //   ))
                // }
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
            initialValue={
              coQuanHanhChinhEditing ? coQuanHanhChinhEditing.status : ''
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

import React from 'react'
import { Col, Form, Row, Modal, Select } from 'antd'
import InputItem from '../../../components/InputItem'

function TaoMoiNoiDungBaoCao ({
  form,
  addVisible,
  setAddVisible,
  addNoiDungBaoCao,
  chiTieuList,
  nhomDanhMucList
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
        title='TẠO MỚI NỘI DUNG BÁO CÁO'
        visible={addVisible}
        onOk={() => {
          setAddVisible(false)
          form.validateFields((err, values) => {
            if (err) {
              return
            }
            form.resetFields()
            addNoiDungBaoCao({
              noiDungCode: values.noiDungCode,
              tieuChiId: values.tieuChiId,
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
          <Row>
            <Col span={11}>
              <InputItem
                form={form}
                label='Mã nội dung'
                field='noiDungCode'
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
            </Col>
            <Col span={11} offset={1}>
              <InputItem
                form={form}
                label='Mã tiêu chí'
                field='tieuChiId'
                type='select'
                options={
                  chiTieuList &&
                  chiTieuList.map(item => (
                    <Select.Option key={String(item.id)} value={item.id}>
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
          <Row>
            <Col span={11}>
              <InputItem
                form={form}
                label='TÊN NỘI DUNG'
                field='name'
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
            </Col>
            <Col span={11} offset={1}>
              <InputItem
                form={form}
                label='NHÓM PHÂN TỔ'
                type='select'
                field='nhomChiTieuId'
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
                options={
                  nhomDanhMucList &&
                  nhomDanhMucList.map(item => (
                    <Select.Option key={String(item.id)} value={item.id}>
                      {item.name}
                    </Select.Option>
                  ))
                }
              />
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
}

export default Form.create({ name: 'form_modal' })(TaoMoiNoiDungBaoCao)

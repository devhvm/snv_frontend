import React from 'react'
import { Col, Form, Row, Select, Modal } from 'antd'
import InputItem from '../../components/InputItem'

function TaoMoiCoQuanHanhChinh ({
  form,
  addVisible,
  setAddVisible,
  addCoQuanHanhChinh,
  maDinhDanhList,
  quyTrinhList
}) {
  console.log('maDinhDanhList', maDinhDanhList)
  console.log('quyTrinhList', quyTrinhList)
  const handleOk = () => {
    setAddVisible(false)
    form.validateFields((err, values) => {
      console.log(values)
      if (err) {
        return
      }
      form.resetFields()
      addCoQuanHanhChinh({
        coQuanHanhChinhCode: values.coQuanHanhChinhCode,
        description: values.description,
        maDinhDanhCode: values.maDinhDanhCode,
        name: values.name,
        level: 'aaa',
        status: 'bbb'
      })
    })
  }

  return (
    <>
      <Modal
        title='TẠO MỚI CƠ QUAN HÀNH CHÍNH'
        visible={addVisible}
        onOk={handleOk}
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
                field='coQuanHanhChinhCode'
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
              <InputItem
                form={form}
                label='Tên đơn vị'
                field='name'
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
                  maDinhDanhList.map((item, i) => (
                    <Select.Option
                      key={String(item.id)}
                      value={JSON.stringify(item.maDinhDanhCode)}
                    >
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
                label='Qui Trình'
                field='quiTrinh'
                type='select'
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
                options={
                  quyTrinhList &&
                  quyTrinhList.map((item, i) => (
                    <Select.Option
                      key={String(item.id)}
                      value={JSON.stringify(item.quyTrinhCode)}
                    >
                      {item.name}
                    </Select.Option>
                  ))
                }
              />
            </Col>
          </Row>
          <InputItem
            form={form}
            label='Mô tả'
            field='description'
            type='textarea'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
        </Form>
      </Modal>
    </>
  )
}

export default Form.create({ name: 'form_modal' })(TaoMoiCoQuanHanhChinh)

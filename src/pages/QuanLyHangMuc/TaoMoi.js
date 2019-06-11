import React from 'react'
import { Col, Form, Modal, Row, Input } from 'antd'
import InputItem from '../../components/InputItem'

function TaoMoiChiTieu ({ form, addVisible, setAddVisible, addChiTieu }) {
  return (
    <>
      <Modal
        title='TẠO MỚI HẠNG MỤC'
        visible={addVisible}
        onOk={() => {
          setAddVisible(false)
          form.validateFields((err, values) => {
            if (err) {
              return
            }
            form.resetFields()
            addChiTieu({
              nhomChiTieuId: values.nhomChiTieuId,
              chiTieuCode: values.chiTieuCode,
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
                label='Mã hạng mục'
                field='coQuanHanhChinhCode'
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
              <InputItem
                form={form}
                label='Tên hạng mục'
                field='coQuanHanhChinhCode'
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
              <InputItem
                form={form}
                label='Tiêu chí'
                field='maDinhDanhCode'
                type='select'
                // options={
                //   maDinhDanhList &&
                //   maDinhDanhList.map(item => (
                //     <Select.Option
                //       key={String(item.id)}
                //       value={item.maDinhDanhCode}
                //     >
                //       {item.name}
                //     </Select.Option>
                //   ))
                // }
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
              <InputItem
                form={form}
                label='Bộ chủ trì'
                field='name'
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
            </Col>
            <Col span={11} offset={2}>
              <InputItem
                form={form}
                label='Đối tượng'
                field='maDinhDanhCode'
                type='select'
                // options={
                //   maDinhDanhList &&
                //   maDinhDanhList.map(item => (
                //     <Select.Option
                //       key={String(item.id)}
                //       value={item.maDinhDanhCode}
                //     >
                //       {item.name}
                //     </Select.Option>
                //   ))
                // }
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
              <InputItem
                form={form}
                label='Phân loại'
                field='quiTrinh'
                type='select'
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
                // options={
                //   quyTrinhList &&
                //   quyTrinhList.map((item, i) => (
                //     <Select.Option
                //       key={String(item.id)}
                //       value={item.quyTrinhCode}
                //     >
                //       {item.name}
                //     </Select.Option>
                //   ))
                // }
              />
              <InputItem
                form={form}
                label='Phạm vi'
                field='quiTrinh'
                type='group'
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
                group={
                  <>
                    <Input
                      style={{
                        width: '40%',
                        textAlign: 'center'
                      }}
                      placeholder='Minimum'
                    />
                    <Input
                      style={{
                        width: '20%',
                        borderLeft: 0,
                        pointerEvents: 'none',
                        backgroundColor: '#fff',
                        textAlign: 'center'
                      }}
                      placeholder='~'
                      disabled
                    />
                    <Input
                      style={{
                        width: '40%',
                        textAlign: 'center',
                        borderLeft: 0
                      }}
                      placeholder='Maximum'
                    />
                  </>
                }
              />
              <InputItem
                form={form}
                label='Phân loại'
                field='quiTrinh'
                type='select'
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
                // options={
                //   quyTrinhList &&
                //   quyTrinhList.map((item, i) => (
                //     <Select.Option
                //       key={String(item.id)}
                //       value={item.quyTrinhCode}
                //     >
                //       {item.name}
                //     </Select.Option>
                //   ))
                // }
              />
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
}
export default Form.create({ name: 'form_modal' })(TaoMoiChiTieu)

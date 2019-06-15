import React from 'react'
import { Col, Form, Row, Modal, Table, Button, Collapse } from 'antd'
import InputItem from '../../components/InputItem'

const Panel = Collapse.Panel
function TaoMoiThietDatQuiTrinh ({ form, addVisible, setAddVisible }) {
  const columns = [
    {
      title: 'STT',
      dataIndex: 'soThuTu',
      key: 'soThuTu'
    },
    {
      title: 'Bắt Đầu',
      dataIndex: 'batDau',
      key: 'batDau'
    },
    {
      title: 'Kết Thúc',
      dataIndex: 'ketThuc',
      key: 'ketThuc'
    },
    {
      title: 'Trạng Thái Tiến Trình',
      key: 'trangThaiTienTrinh',
      dataIndex: 'trangThaiTienTrinh'
    }
  ]

  const data = [
    {
      soThuTu: '1',
      batDau: 'bat dau quy trinh',
      ketThuc: 'ket thuc quy trinh',
      trangThaiTienTrinh: 'new'
    },
    {
      soThuTu: '2',
      batDau: 'bat dau quy trinh',
      ketThuc: 'ket thuc quy trinh',
      trangThaiTienTrinh: 'new'
    }
  ]

  const style = {
    width: '1000px'
  }

  return (
    <>
      <Modal
        title='TẠO MỚI QUY TRÌNH'
        visible={addVisible}
        onOk={() => {
          setAddVisible(false)
        }}
        onCancel={() => {
          setAddVisible(false)
        }}
        style={style}
      >
        <Form>
          <Row>
            <Col span={11}>
              <InputItem
                form={form}
                label='Mã quy trình'
                field='coQuanHanhChinhCode'
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
              <InputItem
                form={form}
                label='Loại quy trình'
                field='coQuanHanhChinhCode'
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
            </Col>
            <Col span={11} offset={1}>
              <InputItem
                form={form}
                label='Tên quy trình'
                field='coQuanHanhChinhCode'
                rules={[
                  { required: true, message: 'Vui lòng không để trống thẻ này' }
                ]}
              />
            </Col>
          </Row>
          <Collapse>
            <Panel header='Thêm tiến trình xử lí' key='2'>
              <Row>
                <Col span={11}>
                  <InputItem
                    form={form}
                    label='Tiến trình code'
                    field='tienTrinhCode'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng không để trống thẻ này'
                      }
                    ]}
                  />
                </Col>
                <Col span={11} offset={1}>
                  <InputItem
                    form={form}
                    label='Tiến trình code'
                    field='tienTrinhCode'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng không để trống thẻ này'
                      }
                    ]}
                  />
                </Col>
              </Row>
            </Panel>
          </Collapse>
          <Collapse>
            <Panel header='Thêm tiến trình' key='1'>
              <Row>
                <Col span={11}>
                  <InputItem
                    form={form}
                    label='Tiến trình bắt đầu'
                    field='coQuanHanhChinhCode'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng không để trống thẻ này'
                      }
                    ]}
                  />
                  <InputItem
                    form={form}
                    label='Trạng Thái'
                    field='coQuanHanhChinhCode'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng không để trống thẻ này'
                      }
                    ]}
                  />
                </Col>
                <Col span={11} offset={1}>
                  <InputItem
                    form={form}
                    label='Tiến trình kết thúc'
                    field='coQuanHanhChinhCode'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng không để trống thẻ này'
                      }
                    ]}
                  />
                  <Form.Item>
                    <Button>Xác nhận</Button>
                  </Form.Item>
                </Col>
              </Row>
            </Panel>
          </Collapse>
          <Row>
            <Table columns={columns} dataSource={data} />
          </Row>
        </Form>
      </Modal>
    </>
  )
}
export default Form.create({ name: 'form_modal' })(TaoMoiThietDatQuiTrinh)

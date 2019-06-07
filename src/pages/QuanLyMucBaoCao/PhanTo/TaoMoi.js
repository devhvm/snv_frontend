import React from 'react'
import { Col, Form, Input, Row, Modal, Select } from 'antd'

export default function TaoMoiPhanTo ({ addVisible, setAddVisible }) {
  return (
    <>
      <Modal
        title='TẠO MỚI PHÂN TỔ'
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
              <Form.Item label='Mã phân tổ'>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Form.Item label='Tên phân tổ'>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Form.Item label='Nhóm chỉ tiêu'>
                <Select defaultValue='' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
}

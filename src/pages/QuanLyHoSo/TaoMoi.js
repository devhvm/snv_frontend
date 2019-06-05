import React, { Fragment } from 'react'
import { Col, Form, Input, Row, Modal } from 'antd'

export default function TaoMoiQuanLyHoSo ({ addVisible, setAddVisible }) {
  return (
    <Fragment>
      <Modal
        title='TẠO MỚI HỒ SƠ'
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
              <Form.Item label='HỌ VÀ TÊN'>
                <Input />
              </Form.Item>
            </Col>
            <Col span={11} offset={1}>
              <Form.Item label=''>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Form.Item label='EMAIL'>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Form.Item label='SỐ ĐIỆN THOẠI'>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Form.Item label='CƠ QUAN ĐƠN VỊ'>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Form.Item label='CHỨC DANH'>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Form.Item label='CHỨC VỤ'>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Form.Item label='MÔ TẢ'>
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </Fragment>
  )
}

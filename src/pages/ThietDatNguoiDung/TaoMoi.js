import React, { Fragment } from 'react'
import { Col, Form, Input, Row, Select, Modal } from 'antd'

export default function TaoMoiThietDatNguoiDung ({ addVisible, setAddVisible }) {
    return (
        <Fragment>
            <Modal
                title='TẠO MỚI NGƯỜI DÙNG'
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
                            <Form.Item label='TÊN ĐĂNG NHẬP'>
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
                            <Form.Item label='ĐƠN VỊ'>
                                <Select defaultValue='' />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </Fragment>
    )
}

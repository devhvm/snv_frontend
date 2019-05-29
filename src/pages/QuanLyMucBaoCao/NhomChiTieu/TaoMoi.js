import React, { Fragment } from 'react'
import { Col, Form, Input, Row, Modal } from 'antd'

export default function TaoMoiChiTieu ({ addVisible, setAddVisible }) {
    return (
        <Fragment>
            <Modal
                title='TẠO MỚI NHÓM CHỈ TIÊU'
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
                            <Form.Item label='Mã nhóm chỉ tiêu'>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={11}>
                            <Form.Item label='Tên nhóm chỉ tiêu'>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </Fragment>
    )
}

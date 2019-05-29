import React, { Fragment } from 'react'
import { Col, Form, Input, Row, Modal, Select } from 'antd'

export default function TaoMoiNoiDungBaoCao ({ addVisible, setAddVisible }) {
    return (
        <Fragment>
            <Modal
                title='TẠO MỚI NỘI DUNG BÁO CÁO'
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
                            <Form.Item label='MÃ NỘI DUNG'>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={11} offset={1}>
                            <Form.Item label='CHỈ TIÊU'>
                                <Select defaultValue='' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={11}>
                            <Form.Item label='TÊN NỘI DUNG'>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={11} offset={1}>
                            <Form.Item label='NHÓM PHÂN TỔ'>
                                <Select defaultValue='' />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </Fragment>
    )
}

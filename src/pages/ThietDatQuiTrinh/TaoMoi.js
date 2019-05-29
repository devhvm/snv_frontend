import React, { Fragment } from 'react'
import { Col, Form, Input, Row, Select, Modal, Table, Button } from 'antd'

export default function TaoMoiThietDatQuiTrinh ({ addVisible, setAddVisible }) {
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
        <Fragment style={style}>
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
                            <Form.Item label='Mã quy trình'>
                                <Input />
                            </Form.Item>
                            <Form.Item label='Loại quy trình'>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={11} offset={1}>
                            <Form.Item label='Tên quy trình'>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Item label='+ Thêm tiến trình' />
                    </Row>
                    <Row>
                        <Col span={11}>
                            <Form.Item label='Tiến trình bắt đầu'>
                                <Input />
                            </Form.Item>
                            <Form.Item label='Trạng Thái'>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={11} offset={1}>
                            <Form.Item label='Tiến trình kết thúc'>
                                <Select defaultValue='' />
                            </Form.Item>
                            <Form.Item>
                                <Button>Xác nhận</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Table columns={columns} dataSource={data} />
                    </Row>
                </Form>
            </Modal>
        </Fragment>
    )
}

import React, { Fragment, useState } from 'react'
import { PageHeader, Table, Divider, Row, Col, Button } from 'antd'
import TaoMoiNoiDungBaoCao from './TaoMoi'

export default function NoiDungBaoCao () {
    const { Column } = Table
    const [addVisible, setAddVisible] = useState(false)

    const data = [
        {
            soThuTu: '1',
            maNoiDung: 'John',
            maTieuChi: 'Brown',
            tenNoiDung: 32
        },
        {
            soThuTu: '2',
            maNoiDung: 'John',
            maTieuChi: 'Brown',
            tenNoiDung: 32
        },
        {
            soThuTu: '3',
            maNoiDung: 'John',
            maTieuChi: 'Brown',
            tenNoiDung: 32
        }
    ]

    return (
        <Fragment>
            <PageHeader title='Danh sách nội dung báo cáo' />
            <Row>
                <Col col={4} offset={21}>
                    <Button
                        style={{ marginBottom: '20px' }}
                        type='primary'
                        icon='plus'
                        onClick={() => {
                            setAddVisible(true)
                        }}
                    >
                        Tạo mới
                    </Button>
                </Col>
            </Row>
            <Table dataSource={data}>
                <Column title='STT' dataIndex='soThuTu' key='soThuTu' />
                <Column title='MÃ NỘI DUNG' dataIndex='maNoiDung' key='maNoiDung' />
                <Column title='MÃ TIÊU CHÍ' dataIndex='maTieuChi' key='maTieuChi' />
                <Column title='TÊN NỘI DUNG' dataIndex='tenNoiDung' key='tenNoiDung' />
                <Column
                    title=''
                    key='action'
                    render={(text, record) => (
                        <span>
                            <a href='javascript:;'>Chi tiết</a>
                            <Divider type='vertical' />
                            <a href='javascript:;'>Xoá</a>
                        </span>
                    )}
                />
            </Table>
            <TaoMoiNoiDungBaoCao addVisible={addVisible} setAddVisible={setAddVisible} />
        </Fragment>
    )
}

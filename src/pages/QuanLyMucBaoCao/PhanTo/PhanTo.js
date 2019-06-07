import React, { Fragment, useState } from 'react'
import { PageHeader, Table, Divider, Row, Col, Button } from 'antd'
import TaoMoiPhanTo from './TaoMoi'

export default function PhanTo () {
  const { Column } = Table
  const [addVisible, setAddVisible] = useState(false)

  const data = [
    {
      soThuTu: '1',
      maNhom: 'John',
      maChiTieu: 'Brown',
      tenNhom: 32
    },
    {
      soThuTu: '2',
      maNhom: 'John',
      maChiTieu: 'Brown',
      tenNhom: 32
    },
    {
      soThuTu: '3',
      maNhom: 'John',
      maChiTieu: 'Brown',
      tenNhom: 32
    }
  ]

  return (
    <Fragment>
      <PageHeader title='Danh sách phân tổ' />
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
        <Column title='MÃ NHÓM' dataIndex='maNhom' key='maNhom' />
        <Column title='MÃ CHỈ TIÊU' dataIndex='maChiTieu' key='maChiTieu' />
        <Column title='TÊN NHÓM' dataIndex='tenNhom' key='tenNhom' />
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
      <TaoMoiPhanTo addVisible={addVisible} setAddVisible={setAddVisible} />
    </Fragment>
  )
}

import React, { useEffect, Fragment, useState } from 'react'
import { PageHeader, Table, Divider, Row, Col, Button } from 'antd'
import TaoMoiThietDatNguoiDung from './TaoMoi'

export default function ThietDatNguoiDung () {
  const { Column } = Table
  const [setEditVisible] = useState(false)
  const [addVisible, setAddVisible] = useState(false)
  useEffect(() => {}, [])

  const data = [
    {
      soThuTu: '1',
      tenNguoiDung: 'John',
      donVi: 'Brown'
    },
    {
      soThuTu: '2',
      tenNguoiDung: 'John',
      donVi: 'Brown'
    },
    {
      soThuTu: '3',
      tenNguoiDung: 'John',
      donVi: 'Brown'
    }
  ]

  return (
    <Fragment>
      <PageHeader title='DANH SÁCH NGƯỜI DÙNG' />
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
        <Column
          title='TÊN NGƯỜI DÙNG'
          dataIndex='tenNguoiDung'
          key='tenNguoiDung'
        />
        <Column title='ĐƠN VỊ' dataIndex='donVi' key='donVi' />
        <Column
          title=''
          key='action'
          render={(text, record) => (
            <span>
              <a
                onClick={() => {
                  setEditVisible(true)
                }}
              >
                Chi tiết
              </a>
              <Divider type='vertical' />
              <a href='javascript:;'>Xoá</a>
            </span>
          )}
        />
      </Table>
      <TaoMoiThietDatNguoiDung
        addVisible={addVisible}
        setAddVisible={setAddVisible}
      />
    </Fragment>
  )
}

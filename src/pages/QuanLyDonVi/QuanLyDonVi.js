import React, { Fragment, useState } from 'react'
import { Button, Col, Divider, PageHeader, Row, Table } from 'antd'
import TaoMoiCoQuanHanhChinh from './TaoMoi'
import ChiTietCoQuanHanhChinh from './ChiTiet'

export default function QuanLyDonVi () {
  const { Column } = Table
  const [editVisible, setEditVisible] = useState(false)
  const [addVisible, setAddVisible] = useState(false)

  const data = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]

  return (
    <Fragment>
      <PageHeader title='DANH SÁCH CƠ QUAN HÀNH CHÍNH' />
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
        <Column title='STT' dataIndex='firstName' key='firstName' />
        <Column title='MÃ QUI TRÌNH' dataIndex='lastName' key='lastName' />
        <Column title='LOẠI QUI TRÌNH' dataIndex='age' key='age' />
        <Column title='TÊN QUI TRÌNH' dataIndex='address' key='address' />
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
      <ChiTietCoQuanHanhChinh
        editVisible={editVisible}
        setEditVisible={setEditVisible}
      />
      <TaoMoiCoQuanHanhChinh
        addVisible={addVisible}
        setAddVisible={setAddVisible}
      />
    </Fragment>
  )
}

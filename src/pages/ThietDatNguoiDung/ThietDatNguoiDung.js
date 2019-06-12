import React, { useEffect, useState } from 'react'
import { PageHeader, Table, Divider, Row, Col, Button } from 'antd'
import TaoMoiThietDatNguoiDung from './TaoMoi'

export default function ThietDatNguoiDung ({
  coQuanHanhChinhList,
  usersList,
  userEditing,
  getUsers,
  getUserEditing,
  editUser,
  addUser,
  deleteUser,
  getCoQuanHanhChinh
}) {
  const { Column } = Table
  const [setEditVisible] = useState(false)
  const [addVisible, setAddVisible] = useState(false)
  useEffect(() => {
    getUsers()
    getCoQuanHanhChinh()
  }, [])

  const dataTable =
    usersList &&
    usersList.map((item, index) => ({
      key: item.id,
      stt: index,
      tenNguoiDung: `${item.firstName} ${item.lastName}`,
      donVi: item.name
    }))

  return (
    <>
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
      <Table dataSource={dataTable}>
        <Column title='STT' dataIndex='stt' key='stt' />
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
              <a
                onClick={() => {
                  deleteUser(record.key)
                }}
              >
                Xoá
              </a>
            </span>
          )}
        />
      </Table>
      <TaoMoiThietDatNguoiDung
        addVisible={addVisible}
        setAddVisible={setAddVisible}
        coQuanHanhChinhList={coQuanHanhChinhList}
        addUser={addUser}
      />
    </>
  )
}

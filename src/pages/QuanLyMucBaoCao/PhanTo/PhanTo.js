import React, { useEffect, useState } from 'react'
import { PageHeader, Table, Divider, Row, Col, Button } from 'antd'
import TaoMoiPhanTo from './TaoMoi'
import ChiTietPhanTo from './ChiTiet'

export default function PhanTo ({
  phanToList,
  phanToEditing,
  getPhanTos,
  getPhanToEditing,
  editPhanTo,
  addPhanTo,
  deletePhanTo
}) {
  const { Column } = Table
  const [addVisible, setAddVisible] = useState(false)
  const [editVisible, setEditVisible] = useState(false)
  useEffect(() => {
    getPhanTos()
  }, [])
  const dataTable =
    phanToList &&
    phanToList.map((item, index) => ({
      key: item.id,
      stt: index + 1,
      maPhanTo: item.nhomDanhMucCode,
      name: item.name
    }))
  return (
    <>
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
      <Table dataSource={dataTable}>
        <Column title='STT' dataIndex='stt' key='stt' />
        <Column title='TÊN' dataIndex='name' key='name' />
        <Column title='MÃ PHÂN TỔ' dataIndex='maPhanTo' key='maPhanTo' />
        <Column
          title=''
          key='action'
          render={(text, record) => (
            <span>
              <a
                onClick={() => {
                  setEditVisible(true)
                  getPhanToEditing(record.key)
                }}
              >
                Chi tiết
              </a>
              <Divider type='vertical' />
              <a
                onClick={() => {
                  deletePhanTo(record.key)
                }}
              >
                Xoá
              </a>
            </span>
          )}
        />
      </Table>
      <TaoMoiPhanTo
        addVisible={addVisible}
        setAddVisible={setAddVisible}
        addPhanTo={addPhanTo}
      />
      <ChiTietPhanTo
        editVisible={editVisible}
        setEditVisible={setEditVisible}
        phanToEditing={phanToEditing}
        editPhanTo={editPhanTo}
      />
    </>
  )
}

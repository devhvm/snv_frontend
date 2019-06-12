import React, { useEffect, useState } from 'react'
import { PageHeader, Table, Divider, Row, Col, Button } from 'antd'
import TaoMoiChiTieu from './TaoMoi'
import ChiTietChiTieu from './ChiTiet'

export default function ChiTieu ({
  chiTieuList,
  chiTieuEditing,
  getChiTieus,
  getChiTieuEditing,
  editChiTieu,
  addChiTieu,
  deleteChiTieu
}) {
  const { Column } = Table
  const [addVisible, setAddVisible] = useState(false)
  const [editVisible, setEditVisible] = useState(false)
  useEffect(() => {
    getChiTieus()
  }, [])
  const dataTable =
    chiTieuList &&
    chiTieuList.map((item, index) => ({
      key: item.id,
      stt: index + 1,
      maNhom: item.nhomChiTieuId,
      maChiTieu: item.chiTieuCode,
      tenNhom: item.name
    }))

  return (
    <>
      <PageHeader title='Danh sách chỉ tiêu' />
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
        <Column title='MÃ NHÓM' dataIndex='maNhom' key='maNhom' />
        <Column title='MÃ CHỈ TIÊU' dataIndex='maChiTieu' key='maChiTieu' />
        <Column title='TÊN NHÓM' dataIndex='tenNhom' key='tenNhom' />
        <Column
          title=''
          key='action'
          render={(text, record) => (
            <span>
              <a
                onClick={() => {
                  setEditVisible(true)
                  getChiTieuEditing(record.key)
                }}
              >
                Chi tiết
              </a>
              <Divider type='vertical' />
              <a
                onClick={() => {
                  deleteChiTieu(record.key)
                }}
              >
                Xoá
              </a>
            </span>
          )}
        />
      </Table>
      <TaoMoiChiTieu
        addVisible={addVisible}
        setAddVisible={setAddVisible}
        addChiTieu={addChiTieu}
      />
      <ChiTietChiTieu
        editVisible={editVisible}
        setEditVisible={setEditVisible}
        chiTieuEditing={chiTieuEditing}
        editChiTieu={editChiTieu}
      />
    </>
  )
}

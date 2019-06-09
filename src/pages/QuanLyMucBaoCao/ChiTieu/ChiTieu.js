import React, { useEffect, useState } from 'react'
import { PageHeader, Table, Divider, Row, Col, Button } from 'antd'
import TaoMoiChiTieu from './TaoMoi'

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
  useEffect(() => {
    getChiTieus()
  }, [])
  const dataTable =
    chiTieuList &&
    chiTieuList.map((item, index) => ({
      key: item.id,
      stt: item.id,
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
              <a href='javascript:;'>Chi tiết</a>
              <Divider type='vertical' />
              <a
                onClick={() => {
                  deleteChiTieu(record.stt)
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
    </>
  )
}

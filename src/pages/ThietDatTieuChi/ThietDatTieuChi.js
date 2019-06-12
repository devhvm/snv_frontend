import React, { useEffect, useState } from 'react'
import { PageHeader, Table, Divider, Col, Button, Row } from 'antd'
import TaoMoiTieuChi from './TaoMoi'
import ChiTietTieuChi from './ChiTiet'

export default function ThietDatTieuChi ({
  tieuChiList,
  chiTieuList,
  kyCongBoList,
  coQuanChuTriList,
  tieuChiEditing,
  getTieuChis,
  getTieuChiEditing,
  editTieuChi,
  addTieuChi,
  deleteTieuChi,
  getKyCongBos,
  getChiTieus,
  getCoQuanChuTris
}) {
  const { Column } = Table
  const [addVisible, setAddVisible] = useState(false)
  const [editVisible, setEditVisible] = useState(false)

  useEffect(() => {
    getTieuChis()
    getKyCongBos()
    getCoQuanChuTris()
    getChiTieus()
  }, [])
  const dataTable =
    tieuChiList &&
    tieuChiList.map((item, index) => ({
      key: item.id,
      stt: index + 1,
      maTieuChi: item.id,
      maCoQuanChuTri: item.coQuanChuTriId,
      maChiTieu: item.chiTieuId,
      maKiCongBo: item.kyCongBoId,
      trangThai: item.status
    }))

  return (
    <>
      <PageHeader title='DANH SÁCH TIÊU CHÍ' />
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
        <Column title='MÃ TIÊU CHÍ' dataIndex='maTieuChi' key='maTieuChi' />
        <Column title='MÃ KÌ CÔNG BỐ' dataIndex='maKiCongBo' key='maKiCongBo' />
        <Column
          title='MÃ CƠ QUAN CHỦ TRÌ'
          dataIndex='maCoQuanChuTri'
          key='maCoQuanChuTri'
        />
        <Column title='MÃ CHỈ TIÊU' dataIndex='maChiTieu' key='maChiTieu' />
        <Column title='TRẠNG THÁI' dataIndex='trangThai' key='trangThai' />
        <Column
          title='Action'
          key='action'
          render={(text, record) => (
            <span>
              <a
                onClick={() => {
                  setEditVisible(true)
                  getTieuChiEditing(record.key)
                }}
              >
                Chi tiết
              </a>
              <Divider type='vertical' />
              <a
                onClick={() => {
                  deleteTieuChi(record.key)
                }}
              >
                Delete
              </a>
            </span>
          )}
        />
      </Table>
      <TaoMoiTieuChi
        addVisible={addVisible}
        setAddVisible={setAddVisible}
        addChiTieu={addTieuChi}
        kyCongBoList={kyCongBoList}
        chiTieuList={chiTieuList}
        coQuanChuTriList={coQuanChuTriList}
      />
      <ChiTietTieuChi
        editVisible={editVisible}
        setEditVisible={setEditVisible}
        tieuChiEditing={tieuChiEditing}
        editTieuChi={editTieuChi}
        kyCongBoList={kyCongBoList}
        chiTieuList={chiTieuList}
        coQuanChuTriList={coQuanChuTriList}
      />
    </>
  )
}

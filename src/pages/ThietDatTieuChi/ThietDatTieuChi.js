import React, { useEffect } from 'react'
import { PageHeader, Table, Divider } from 'antd'

export default function ThietDatQuiTrinh ({
  tieuChiList,
  tieuChiEditing,
  getTieuChis,
  getTieuChiEditing,
  editTieuChi,
  addTieuChi,
  deleteTieuChi
}) {
  const { Column } = Table
  useEffect(() => {
    getTieuChis()
  }, [])
  const dataTable =
    tieuChiList &&
    tieuChiList.map((item, index) => ({
      key: item.id,
      stt: item.id,
      maTieuChi: item.id,
      maCoQuanChuTri: item.coQuanChuTriId,
      maChiTieu: item.chiTieuId,
      maKiCongBo: item.kyCongBoId,
      trangThai: item.status
    }))

  return (
    <>
      <PageHeader title='DANH SÁCH TIÊU CHÍ' />
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
              <a href='javascript:;'>Chi tiết</a>
              <Divider type='vertical' />
              <a href='javascript:;'>Delete</a>
            </span>
          )}
        />
      </Table>
    </>
  )
}

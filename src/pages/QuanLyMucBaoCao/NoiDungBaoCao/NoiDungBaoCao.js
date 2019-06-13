import React, { useEffect, useState } from 'react'
import { PageHeader, Table, Divider, Row, Col, Button } from 'antd'
import TaoMoiNoiDungBaoCao from './TaoMoi'

export default function NoiDungBaoCao ({
  noiDungBaoCaoList,
  noiDungBaoCaoEditing,
  getNoiDungBaoCaos,
  getNoiDungBaoCaoEditing,
  editNoiDungBaoCao,
  addNoiDungBaoCao,
  deleteNoiDungBaoCao,
  chiTieuList,
  getChiTieus,
  nhomDanhMucList,
  getNhomDanhMuc
}) {
  const { Column } = Table
  const [addVisible, setAddVisible] = useState(false)
  useEffect(() => {
    getNoiDungBaoCaos()
    getChiTieus()
    getNhomDanhMuc()
  }, [])
  const dataTable =
    noiDungBaoCaoList &&
    noiDungBaoCaoList.map((item, index) => ({
      key: item.id,
      stt: index,
      maNoiDung: item.noiDungCode,
      maTieuChi: item.tieuChiId,
      tenNoiDung: item.name
    }))

  return (
    <>
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
      <Table dataSource={dataTable}>
        <Column title='STT' dataIndex='stt' key='stt' />
        <Column title='MÃ NỘI DUNG' dataIndex='maNoiDung' key='maNoiDung' />
        <Column title='MÃ TIÊU CHÍ' dataIndex='maTieuChi' key='maTieuChi' />
        <Column
          width='30%'
          title='TÊN NỘI DUNG'
          dataIndex='tenNoiDung'
          key='tenNoiDung'
        />
        <Column
          title=''
          key='action'
          render={(text, record) => (
            <span>
              <a href='javascript:;'>Chi tiết</a>
              <Divider type='vertical' />
              <a
                onClick={() => {
                  deleteNoiDungBaoCao(record.key)
                }}
              >
                Xoá
              </a>
            </span>
          )}
        />
      </Table>
      <TaoMoiNoiDungBaoCao
        addVisible={addVisible}
        setAddVisible={setAddVisible}
        chiTieuList={chiTieuList}
        nhomDanhMucList={nhomDanhMucList}
        addNoiDungBaoCao={addNoiDungBaoCao}
      />
    </>
  )
}

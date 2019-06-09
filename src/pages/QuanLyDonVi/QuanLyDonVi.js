import React, { useState, useEffect } from 'react'
import { Button, Col, Divider, PageHeader, Row, Table } from 'antd'
import TaoMoiCoQuanHanhChinh from './TaoMoi'
import ChiTietCoQuanHanhChinh from './ChiTiet'

export default function QuanLyDonVi ({
  coQuanHanhChinh,
  coQuanHanhChinhEditing,
  maDinhDanhList,
  quyTrinhList,
  getCoQuanHanhChinh,
  getCoQuanHanhChinhEditing,
  editCoQuanHanhChinh,
  addCoQuanHanhChinh,
  deleteCoQuanHanhChinh,
  getMaDinhDanhs,
  getQuyTrinhs
}) {
  useEffect(() => {
    getCoQuanHanhChinh()
    getMaDinhDanhs()
    getQuyTrinhs()
  }, [])
  const { Column } = Table
  const [editVisible, setEditVisible] = useState(false)
  const [addVisible, setAddVisible] = useState(false)

  const dataTable =
    coQuanHanhChinh &&
    coQuanHanhChinh.map((item, index) => ({
      key: item.id,
      stt: index,
      maDinhDanh: item.maDinhDanhCode,
      tenCoQuanHanhChinh: item.name,
      maCoQuanHanhChinh: item.id
    }))

  return (
    <>
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
      <Table dataSource={dataTable}>
        <Column title='STT' dataIndex='stt' key='firstName' />
        <Column
          title='MÃ CƠ QUAN HÀNH CHÍNH'
          dataIndex='maCoQuanHanhChinh'
          key='maCoQuanHanhChinh'
        />
        <Column title='MÃ ĐỊNH DANH' dataIndex='maDinhDanh' key='maDinhDanh' />
        <Column
          title='TÊN CƠ QUAN HÀNH CHÍNH'
          dataIndex='tenCoQuanHanhChinh'
          key='tenCoQuanHanhChinh'
        />
        <Column
          title=''
          key='action'
          render={(text, record) => (
            <span>
              <a
                onClick={() => {
                  setEditVisible(true)
                  getCoQuanHanhChinhEditing(record.maCoQuanHanhChinh)
                }}
              >
                Chi tiết
              </a>
              <Divider type='vertical' />
              <a
                onClick={() => {
                  deleteCoQuanHanhChinh(record.maCoQuanHanhChinh)
                }}
              >
                Xoá
              </a>
            </span>
          )}
        />
      </Table>
      <ChiTietCoQuanHanhChinh
        editVisible={editVisible}
        setEditVisible={setEditVisible}
        coQuanHanhChinhEditing={coQuanHanhChinhEditing}
        editCoQuanHanhChinh={editCoQuanHanhChinh}
      />
      <TaoMoiCoQuanHanhChinh
        addVisible={addVisible}
        setAddVisible={setAddVisible}
        addCoQuanHanhChinh={addCoQuanHanhChinh}
        maDinhDanhList={maDinhDanhList}
        quyTrinhList={quyTrinhList}
      />
    </>
  )
}

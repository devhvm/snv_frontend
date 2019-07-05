import React, { useState, useEffect } from 'react'
import { Button, Col, Divider, PageHeader, Row, Table } from 'antd'
import TaoMoiCoQuanHanhChinh from './TaoMoi'
import ChiTietCoQuanHanhChinh from './ChiTiet'
import DeleteConfirm from '../../components/DeleteConfirm'

export default function QuanLyDonVi ({
  coQuanHanhChinhList,
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
  const [deleteVisible, setDeleteVisible] = useState(false)

  const dataTable =
    coQuanHanhChinhList &&
    coQuanHanhChinhList.map((item, index) => ({
      key: item.id,
      stt: index + 1,
      maDinhDanh: item.maDinhDanhCode,
      tenCoQuanHanhChinh: item.name,
      maCoQuanHanhChinh: item.coQuanHanhChinhCode
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
            <>
              <a
                onClick={() => {
                  setEditVisible(true)
                  getCoQuanHanhChinhEditing(record.key)
                }}
              >
                Chi tiết
              </a>
              <Divider type='vertical' />
              <a
                onClick={() => {
                  setDeleteVisible(true)
                  getCoQuanHanhChinhEditing(record.key)
                }}
              >
                Xoá
              </a>
            </>
          )}
        />
      </Table>
      <ChiTietCoQuanHanhChinh
        editVisible={editVisible}
        setEditVisible={setEditVisible}
        coQuanHanhChinhEditing={coQuanHanhChinhEditing}
        editCoQuanHanhChinh={editCoQuanHanhChinh}
        maDinhDanhList={maDinhDanhList}
        quyTrinhList={quyTrinhList}
      />
      <TaoMoiCoQuanHanhChinh
        addVisible={addVisible}
        setAddVisible={setAddVisible}
        addCoQuanHanhChinh={addCoQuanHanhChinh}
        maDinhDanhList={maDinhDanhList}
        quyTrinhList={quyTrinhList}
      />
      <DeleteConfirm
        title='Cơ quan hành chính'
        deleteVisible={deleteVisible}
        setDeleteVisible={setDeleteVisible}
        deleteAction={deleteCoQuanHanhChinh}
        coQuanHanhChinhEditingId={coQuanHanhChinhEditing.id}
      />
    </>
  )
}

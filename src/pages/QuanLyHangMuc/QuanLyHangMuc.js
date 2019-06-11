import React, { useState, useEffect } from 'react'
import { Button, Col, Divider, PageHeader, Row, Table } from 'antd'
import TaoMoiCoQuanHanhChinh from './TaoMoi'
import ChiTietCoQuanHanhChinh from './ChiTiet'

export default function QuanLyDonVi ({
  coQuanHanhChinhList,
  coQuanHanhChinhEditing,
  getCoQuanHanhChinh,
  getCoQuanHanhChinhEditing,
  editCoQuanHanhChinh,
  addCoQuanHanhChinh,
  deleteCoQuanHanhChinh
}) {
  useEffect(() => {
    getCoQuanHanhChinh()
  }, [])
  const { Column } = Table
  const [editVisible, setEditVisible] = useState(false)
  const [addVisible, setAddVisible] = useState(false)

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
      <PageHeader title='DANH SÁCH HẠNG MỤC' />
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
          title='MÃ HẠNG MỤC'
          dataIndex='maCoQuanHanhChinh'
          key='maCoQuanHanhChinh'
        />
        <Column
          title='TÊN HẠNG MỤC'
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
                  deleteCoQuanHanhChinh(record.key)
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
      />
      <TaoMoiCoQuanHanhChinh
        addVisible={addVisible}
        setAddVisible={setAddVisible}
        addCoQuanHanhChinh={addCoQuanHanhChinh}
      />
    </>
  )
}

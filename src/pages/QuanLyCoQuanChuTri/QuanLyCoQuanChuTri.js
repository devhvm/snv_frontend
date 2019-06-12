import React, { useEffect, useState } from 'react'
import { Button, Col, Divider, PageHeader, Row, Table } from 'antd'

export default function QuanLyCoQuanChuTri ({
  coQuanChuTriList,
  coQuanChuTriEditing,
  getCoQuanChuTris,
  getCoQuanChuTriEditing,
  editCoQuanChuTri,
  addCoQuanChuTri,
  deleteCoQuanChuTri
}) {
  const { Column } = Table
  const [setEditVisible] = useState(false)
  // const [addVisible, setAddVisible] = useState(false)
  useEffect(() => {
    getCoQuanChuTris()
  }, [])
  const dataTable =
    coQuanChuTriList &&
    coQuanChuTriList.map((item, index) => ({
      key: item.id,
      stt: index + 1,
      maCoQuanChuTri: item.id,
      tenCoQuanChuTri: item.name,
      maDinhDanh: item.maDinhDanhCode
    }))

  return (
    <>
      <PageHeader title='DANH SÁCH CƠ QUAN CHỦ TRÌ' />
      <Row>
        <Col col={4} offset={21}>
          <Button
            style={{ marginBottom: '20px' }}
            type='primary'
            icon='plus'
            // onClick={() => {
            //   setAddVisible(true)
            // }}
          >
            Tạo mới
          </Button>
        </Col>
      </Row>
      <Table dataSource={dataTable}>
        <Column title='STT' dataIndex='stt' key='stt' />
        <Column
          title='MÃ CƠ QUAN CHỦ TRÌ'
          dataIndex='maCoQuanChuTri'
          key='maCoQuanChuTri'
        />
        <Column
          title='TÊN CƠ QUAN CHỦ TRÌ'
          dataIndex='tenCoQuanChuTri'
          key='tenCoQuanChuTri'
        />
        <Column title='MÃ ĐỊNH DANH' dataIndex='maDinhDanh' key='maDinhDanh' />
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
              <a href='javascript:;'>Xoá</a>
            </span>
          )}
        />
      </Table>
      {/* <TaoMoiThietDatQuiTrinh */}
      {/* addVisible={addVisible} */}
      {/* setAddVisible={setAddVisible} */}
      {/* /> */}
    </>
  )
}

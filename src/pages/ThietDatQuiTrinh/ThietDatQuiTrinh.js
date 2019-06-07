import React, { useEffect, useState } from 'react'
import { PageHeader, Table, Divider, Row, Col, Button } from 'antd'
import TaoMoiThietDatQuiTrinh from './TaoMoi'

export default function ThietDatQuiTrinh ({
  quyTrinhList,
  quyTrinhEditing,
  getQuyTrinhs,
  getQuyTrinhEditing,
  editQuyTrinh,
  addQuyTrinh,
  deleteQuyTrinh
}) {
  const { Column } = Table
  const [setEditVisible] = useState(false)
  const [addVisible, setAddVisible] = useState(false)
  useEffect(() => {
    getQuyTrinhs()
  }, [])

  const dataTable =
    quyTrinhList &&
    quyTrinhList.map((item, index) => ({
      key: item.id,
      stt: item.id,
      maQuiTrinh: item.quyTrinhCode,
      loaiQuiTrinh: item.loaiQuyTrinhName,
      tenQuiTrinh: item.name
    }))

  return (
    <>
      <PageHeader title='DANH SÁCH QUI TRÌNH' />
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
        <Column title='MÃ QUI TRÌNH' dataIndex='maQuiTrinh' key='maQuiTrinh' />
        <Column
          title='LOẠI QUI TRÌNH'
          dataIndex='loaiQuiTrinh'
          key='loaiQuiTrinh'
        />
        <Column
          title='TÊN QUI TRÌNH'
          dataIndex='tenQuiTrinh'
          key='tenQuiTrinh'
        />
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
      <TaoMoiThietDatQuiTrinh
        addVisible={addVisible}
        setAddVisible={setAddVisible}
      />
    </>
  )
}

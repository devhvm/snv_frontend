import React, { useEffect, useState } from 'react'import { PageHeader, Table, Divider, Row, Col, Button } from 'antd'import TaoMoiNhomChiTieu from './TaoMoi'export default function NhomChiTieu ({  nhomChiTieuList,  nhomChiTieuEditing,  getNhomChiTieu,  getNhomChiTieuEditing,  editNhomChiTieu,  addNhomChiTieu,  deleteNhomChiTieu}) {  const { Column } = Table  const [addVisible, setAddVisible] = useState(false)  useEffect(() => {    getNhomChiTieu()  }, [])  const dataTable =    nhomChiTieuList &&    nhomChiTieuList.map((item, index) => ({      key: item.id,      stt: item.id,      maNhomChiTieu: item.nhomChiTieuCode,      tenNhomChiTieu: item.name    }))  return (    <>      <PageHeader title='Danh sách nhóm chỉ tiêu' />      <Row>        <Col col={4} offset={21}>          <Button            style={{ marginBottom: '20px' }}            type='primary'            icon='plus'            onClick={() => {              setAddVisible(true)            }}          >            Tạo mới          </Button>        </Col>      </Row>      <Table dataSource={dataTable}>        <Column title='STT' dataIndex='stt' key='stt' />        <Column title='MÃ' dataIndex='maNhomChiTieu' key='maNhomChiTieu' />        <Column          title='TÊN NHÓM CHỈ TIÊU'          dataIndex='tenNhomChiTieu'          key='tenNhomChiTieu'        />        <Column          title=''          key='action'          render={(text, record) => (            <span>              <a href='javascript:;'>Chi tiết</a>              <Divider type='vertical' />              <a href='javascript:;'>Xoá</a>            </span>          )}        />      </Table>      <TaoMoiNhomChiTieu        addVisible={addVisible}        setAddVisible={setAddVisible}      />    </>  )}
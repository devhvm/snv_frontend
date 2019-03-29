import React from 'react'
import { Button, Table, Checkbox, Input, Form } from 'antd'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AddButton = styled(Button)`
  width: 200px !important;
`

const ListTable = styled(Table)`
  margin-top: 20px;
`

function DanhMucPhanLoaiGoc () {
  const data = [
    {
      key: '1',
      stt: 1,
      name: 'Mike',
      code: 12,
      used: true
    },
    {
      key: '2',
      stt: 2,
      name: 'John',
      code: 12,
      used: true
    },
    {
      key: '3',
      stt: 3,
      name: 'John',
      code: 12,
      used: false
    },
    {
      key: '4',
      stt: 4,
      name: 'David',
      code: 12,
      used: true
    }
  ]

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: '10%'
      // render: text => <a href='javascript:;'>{text}</a>
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      width: '35%'
    },
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      width: '20%'
    },
    {
      title: 'Sử dụng',
      key: 'used',
      width: '15%',
      render: used => (
        <span>
          <Checkbox checked={used}>AAA</Checkbox>
        </span>
      )
    }
  ]

  return (
    <React.Fragment>
      <h3>Thêm Bộ Chủ Trì</h3>
      <Form>
        <Form.Item label='Tên'>
          <Input />
        </Form.Item>
        <Form.Item label='Code'>
          <Input />
        </Form.Item>
        <Button type='primary' block>
          Thêm
        </Button>
      </Form>
      <h3 style={{ marginTop: '20px' }}>Danh sách Danh phân loại gốc</h3>
      <Link to='/bochutri/add'>
        <AddButton type='primary' block>
          Thêm
        </AddButton>
      </Link>
      <ListTable columns={columns} dataSource={data} />
    </React.Fragment>
  )
}

export default DanhMucPhanLoaiGoc

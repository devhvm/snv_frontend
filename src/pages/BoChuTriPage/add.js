import React from 'react'
import { Form, Input, Button } from 'antd'

function AddBoChuTri () {
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
    </React.Fragment>
  )
}

export default AddBoChuTri

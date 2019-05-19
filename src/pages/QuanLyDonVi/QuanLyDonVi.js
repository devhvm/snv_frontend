import React, { useEffect, Fragment } from 'react'
import { Col, Form, Input, PageHeader, Row, Select } from 'antd'

export default function QuanLyDonVi () {
  useEffect(() => {}, [])

  return (
    <Fragment>
      <PageHeader title='TẠO MỚI CƠ QUAN HÀNH CHÍNH' />
      <Form>
        <Row>
          <Col span={11}>
            <Form.Item label='Mã đơn vị'>
              <Input />
            </Form.Item>
            <Form.Item label='Tên đơn vị'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={11} offset={1}>
            <Form.Item label='Mã đơn vị'>
              <Select
                defaultValue=''
                // onSelect={value => {
                // }}
              />
            </Form.Item>
            <Form.Item label='Tên đơn vị'>
              <Select
                defaultValue=''
                // value={coQuanChuTriList ? coQuanChuTriList[0].name : ''}
                // onSelect={value => {
                // }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label='Mô tả'>
          <Input.TextArea
            placeholder='Mô tả'
            style={{
              height: 95,
              width: '96%',
              maxWidth: 'unset'
            }}
          />
        </Form.Item>
      </Form>
    </Fragment>
  )
}

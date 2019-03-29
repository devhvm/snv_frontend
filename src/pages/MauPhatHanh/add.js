import React, { Fragment, useState } from 'react'
import { Button, Form, Input, Select, DatePicker } from 'antd'
import styled from 'styled-components'
import moment from 'moment'

const Option = Select.Option
const dateFormat = 'DD-MM-YYYY'

const FormAddMauPhatHanh = styled(Form)`
  display: grid;
  grid-template-columns: auto auto;
  width: 80%;
`

const ButtonAddMauPhatHanh = styled(Button)`
  display: flex !important;
  margin: auto;
  right: 10%;
`

const InputAddMauPhatHanh = styled(Input)`
  width: 95% !important;
`

const SelectAddMauPhatHanh = styled(Select)`
  width: 95% !important;
`

const DatePickerAddMauPhatHanh = styled(DatePicker)`
  width: 95% !important;
`

function MauPhatHanhAddPage (data) {
  const [maMauPhatHanh, setMaMauPhatHanh] = useState('')
  const [tenMauPhatHanh, setTenMauPhatHanh] = useState('')
  const [ngayPhatHanh, setNgayPhatHanh] = useState(moment().format(dateFormat))
  const [trangThai, setTrangThai] = useState('')
  return (
    <Fragment>
      <h3>Thêm Mẫu Phát Hành</h3>
      <FormAddMauPhatHanh>
        <Form.Item label='Mã mẫu:'>
          <InputAddMauPhatHanh
            placeholder='Nhập mã mẫu phát hành'
            value={maMauPhatHanh}
          />
        </Form.Item>
        <Form.Item label='Tên mẫu:'>
          <InputAddMauPhatHanh
            placeholder='Nhập tên mẫu phát hành'
            value={tenMauPhatHanh}
          />
        </Form.Item>
        <Form.Item label='Ngày phát hành:'>
          <DatePickerAddMauPhatHanh defaultValue={moment(ngayPhatHanh, dateFormat)} placeholder='Nhập ngày phát hành' />
        </Form.Item>
        <Form.Item label='Chỉ tiêu:'>
          <SelectAddMauPhatHanh defaultValue='Chỉ tiêu'>
            <Option value='Chỉ tiêu 1'>Tiêu chí 1</Option>
            <Option value='Chỉ tiêu 2'>Tiêu chí 2</Option>
          </SelectAddMauPhatHanh>
        </Form.Item>
        <Form.Item label='Trạng thái:'>
          <SelectAddMauPhatHanh defaultValue='Đã phát hành'>
            <Option value='Đã phát hành'>Đã phát hành</Option>
            <Option value='Tạo mới'>Tạo mới</Option>
            <Option value='Đã xoá'>Đã xoá</Option>
          </SelectAddMauPhatHanh>
        </Form.Item>
      </FormAddMauPhatHanh>
      <ButtonAddMauPhatHanh type='primary'>Thêm Mẫu Phát Hành Mới</ButtonAddMauPhatHanh>
    </Fragment>
  )
}
export default MauPhatHanhAddPage

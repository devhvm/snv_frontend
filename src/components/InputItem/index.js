import React from 'react'
import { Input, InputNumber, Form, Select } from 'antd'

const { TextArea } = Input
const { Item } = Form

function InputItem ({
  form,
  label,
  field,
  initialValue = '',
  type = 'text',
  rules,
  disabled,
  autosize,
  options
}) {
  return (
    <Item label={label}>
      {form.getFieldDecorator(field, { rules, initialValue })(
        type === 'number' ? (
          <InputNumber />
        ) : type === 'textarea' ? (
          <TextArea autosize={autosize} />
        ) : type === 'select' ? (
          <Select>{options}</Select>
        ) : type === 'disabled' ? (
          <Input disabled />
        ) : type === 'hidden' ? (
          <Input type='hidden' />
        ) : (
          <Input />
        )
      )}
    </Item>
  )
}

export default InputItem

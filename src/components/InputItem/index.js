import React from 'react'
import { Input, InputNumber, Form, Select } from 'antd'

const { TextArea, Group } = Input
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
  options,
  group
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
        ) : type === 'group' ? (
          <Group compact>{group}</Group>
        ) : (
          <Input />
        )
      )}
    </Item>
  )
}

export default InputItem

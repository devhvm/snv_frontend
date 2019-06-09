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
  autosize,
  optionsData
}) {
  return (
    <Item label={label}>
      {form.getFieldDecorator(field, { rules, initialValue })(
        type === 'number' ? (
          <InputNumber />
        ) : type === 'textarea' ? (
          <TextArea autosize={autosize} />
        ) : type === 'select' ? (
          <Select>
            {optionsData.map((item, index) => (
              <Select.Option key={index}>aaaa</Select.Option>
            ))}
          </Select>
        ) : (
          <Input />
        )
      )}
    </Item>
  )
}

export default InputItem

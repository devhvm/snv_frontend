import React from 'react'
import { Form, Modal } from 'antd'
import InputItem from '../../components/InputItem'

function TaoDonViChuQuan ({ form, addVisible, setAddVisible, addNhomChiTieu }) {
  // const statusList = [
  //   {
  //     value: 'PUBLISH'
  //   },
  //   {
  //     value: 'UNPUBLISH'
  //   },
  //   {
  //     value: 'DELETE'
  //   }
  // ]

  return (
    <>
      <Modal
        title='TẠO MỚI ĐƠN VỊ CHỦ QUẢN'
        visible={addVisible}
        onOk={() => {
          setAddVisible(false)
          form.validateFields((err, values) => {
            if (err) {
              return
            }
            form.resetFields()
            addNhomChiTieu({
              nhomChiTieuCode: values.nhomChiTieuCode,
              name: values.name,
              status: values.status
            })
          })
        }}
        onCancel={() => {
          setAddVisible(false)
        }}
      >
        <Form>
          <InputItem
            form={form}
            label='Mã Chủ Trì'
            field='maChuTri'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          <InputItem
            form={form}
            label='Tên Cơ Quan Chủ Trì'
            field='name'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          {/* <InputItem */}
          {/* form={form} */}
          {/* label='Mã định danh' */}
          {/* field='status' */}
          {/* type='select' */}
          {/* options={ */}
          {/* statusList && */}
          {/* statusList.map((item, index) => ( */}
          {/* <Select.Option key={index} value={item.value}> */}
          {/* {item.value} */}
          {/* </Select.Option> */}
          {/* )) */}
          {/* } */}
          {/* rules={[ */}
          {/* { required: true, message: 'Vui lòng không để trống thẻ này' } */}
          {/* ]} */}
          {/* /> */}
        </Form>
      </Modal>
    </>
  )
}

export default Form.create({ name: 'form_modal' })(TaoDonViChuQuan)

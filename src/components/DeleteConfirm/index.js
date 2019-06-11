import React from 'react'
import { Modal } from 'antd'

export default function DeleteConfirm ({
  title,
  deleteVisible,
  setDeleteVisible,
  deleteAction,
  coQuanHanhChinhEditingId
}) {
  return (
    <Modal
      title={`Bạn chắc chắn muốn xoá ${title} này?`}
      okType='danger'
      visible={deleteVisible}
      onOk={() => {
        deleteAction(coQuanHanhChinhEditingId)
        setDeleteVisible(false)
      }}
      onCancel={() => {
        setDeleteVisible(false)
      }}
    >
      <p>
        Thông tin sau khi xác nhận xoá sẽ không thể khôi phục lại. Hãy chắc chắn
        rằng bạn đã kiểm tra kỹ trước khi thực hiện thao tác này.
      </p>
    </Modal>
  )
}

import React from 'react'
import { Layout, Menu, Avatar } from 'antd'
import styled from 'styled-components'
const MenuItem = Menu.Item

const LayoutHeader = styled(Layout.Header)`
  && {
    background: #fff;
    padding: 0;
    box-shadow: 0 2px 8px #f0f1f2;
    z-index: 10;
  }
`

const HeaderMenu = styled(Menu)`
  && {
    line-height: 64px;
  }
`

const HeaderSubMenu = styled(Menu.SubMenu)`
  && {
    float: right;
    border-bottom: none !important;
    margin-right: 5px;
  }
`

export default function Header ({ name, image, logout }) {
  return (
    <LayoutHeader>
      <HeaderMenu mode='horizontal'>
        <HeaderSubMenu
          title={
            <span>
              <Avatar src={image} /> {name}
            </span>
          }
        >
          <MenuItem onClick={logout}>Logout</MenuItem>
        </HeaderSubMenu>
      </HeaderMenu>
    </LayoutHeader>
  )
}

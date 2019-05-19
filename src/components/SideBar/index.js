import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const App = styled.div`
  text-align: center;
  padding: 18px 12px 14px 0px;
  background: #002140;
`
const Logo = styled.img`
  height: 30px;
  margin-right: 6px;
`
const AppName = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`

export default function Sidebar (props) {
  return (
    <Layout.Sider
      theme='dark'
      trigger={null}
      collapsible
      collapsed={props.collapsed}
    >
      <App className='logo'>
        <Logo src={logo} alt='logo' />
        <AppName>SNV</AppName>
      </App>
      <Menu mode='inline' theme='dark'>
        <Menu.Item key='0'>
          <Link to='/maubaocao'>
            <Icon type='line-chart' />
            <span>Quản Lí Đơn Vị</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='1'>
          <Link to='/mauphathanh'>
            <Icon type='line-chart' />
            <span>Thiết Đặt Qui Trình</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/nhaplieu'>
            <Icon type='user' />
            <span>Quản Lí Mục Báo Cáo</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <Link to='/tongket'>
            <Icon type='user' />
            <span>Thiết Đặt Tiêu Chí</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='4'>
          <Link to='/danhsachtieuchi'>
            <Icon type='user' />
            <span>Quản Lí Cơ Quan Chủ Trì</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='5'>
          <Link to='/maubaocao/editAbleCell'>
            <Icon type='user' />
            <span>Thiết Đặt User</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

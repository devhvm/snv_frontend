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

export default function Sidebar ({ collapsed }) {
  const SubMenu = Menu.SubMenu
  return (
    <Layout.Sider theme='dark' trigger={null} collapsible collapsed={collapsed}>
      <App className='logo'>
        <Logo src={logo} alt='logo' />
        <AppName>SNV</AppName>
      </App>
      <Menu theme='dark' mode='vertical'>
        <Menu.Item key='0'>
          <Link to='/quanlydonvi'>
            <Icon type='line-chart' />
            <span>Quản Lí Đơn Vị</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='1'>
          <Link to='/thietdatquitrinh'>
            <Icon type='line-chart' />
            <span>Thiết Đặt Qui Trình</span>
          </Link>
        </Menu.Item>
        <SubMenu
          title={
            <span>
              <Icon type='user' />
              <span>Quản Lí Mục Báo Cáo</span>
            </span>
          }
        >
          <Menu.Item key='2'>
            <Link to='/nhomchitieu'>
              <Icon type='line-chart' />
              <span>Nhóm Chỉ Tiêu</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='3'>
            <Link to='/chitieu'>
              <Icon type='line-chart' />
              <span>Chỉ Tiêu</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='4'>
            <Link to='/phanto'>
              <Icon type='line-chart' />
              <span>Phân tổ</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='5'>
            <Link to='/noidungbaocao'>
              <Icon type='line-chart' />
              <span>Nội Dung Báo Cáo</span>
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key='7'>
          <Link to='/quanlyhangmuc'>
            <Icon type='user' />
            <span>Quản Lý Hạng Mục</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='8'>
          <Link to='/congthuctonghop'>
            <Icon type='user' />
            <span>Công Thức Tổng Hợp</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='9'>
          <Link to='/thietdattieuchi'>
            <Icon type='user' />
            <span>Thiết Đặt Tiêu Chí</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='10'>
          <Link to='/quanlycoquanchutri'>
            <Icon type='user' />
            <span>Quản Lí Cơ Quan Chủ Trì</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='11'>
          <Link to='/thietdatnguoidung'>
            <Icon type='user' />
            <span>Thiết Đặt Người Dùng</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='12'>
          <Link to='/quanlyhoso'>
            <Icon type='user' />
            <span>Quản Lý Hồ Sơ</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

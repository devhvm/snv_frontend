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
        <AppName>CMS</AppName>
      </App>
      <Menu mode='inline' theme='dark'>
        <Menu.SubMenu
          key='danhmucgoc'
          title={
            <span>
              <Icon type='dollar' />
              <span>Thiết lập danh mục gốc</span>
            </span>
          }
        >
          <Menu.Item key='0'>
            <Link to='/maubaocao'>
              <Icon type='line-chart' />
              <span>Mẫu Báo Cáo</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='16'>
            <Link to='/mauphathanh'>
              <Icon type='line-chart' />
              <span>Mẫu Phát Hành</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='1'>
            <Link to='/bochutri'>
              <Icon type='line-chart' />
              <span>Bộ chủ trì</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/sobannganh'>
              <Icon type='calendar' />
              <span>Sở ban ngành</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='3'>
            <Link to='/danhmucphanloaigoc'>
              <Icon type='user' />
              <span>Danh mục phân loại gốc</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='4'>
            <Link to='/chitieu'>
              <Icon type='user' />
              <span>Chỉ tiêu</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='5'>
            <Link to='/kicongbo'>
              <Icon type='user' />
              <span>Kì công bố</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='6'>
            <Link to='/nhomchitieu'>
              <Icon type='user' />
              <span>Nhóm chỉ tiêu</span>
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            key='loaibaocao'
            title={
              <span>
                <Icon type='dollar' />
                Tạo loại báo cáo
              </span>
            }
          >
            <Menu.Item key='7'>
              <Link to='/nhaplieu'>
                <Icon type='user' />
                <span>Nhập liệu</span>
              </Link>
            </Menu.Item>
            <Menu.Item key='8'>
              <Link to='/tongket'>
                <Icon type='user' />
                <span>Tổng kết</span>
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item key='9'>
          <Link to='/danhsachtieuchi'>
            <Icon type='user' />
            <span>Danh sách tiêu chí</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='10'>
          <Link to='/thietlapmaubaocao'>
            <Icon type='user' />
            <span>Thiết lập mẫu báo cáo</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='11'>
          <Link to='/baocao'>
            <Icon type='user' />
            <span>Báo cáo</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='12'>
          <Link to='/kinop'>
            <Icon type='user' />
            <span>Kí nộp</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='13'>
          <Link to='/tracuu'>
            <Icon type='user' />
            <span>Tra cứu</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='14'>
          <Link to='/taikhoan'>
            <Icon type='user' />
            <span>Tài khoản</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='15'>
          <Link to='/trogiup'>
            <Icon type='user' />
            <span>Trợ giúp</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import Header from '../components/Header'
import Sidebar from '../components/SideBar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import QuanLyDonVi from '../pages/QuanLyDonVi'
import ThietDatQuiTrinh from '../pages/ThietDatQuiTrinh'
import ThietDatTieuChi from '../pages/ThietDatTieuChi'
import QuanLyCoQuanChuTri from '../pages/QuanLyCoQuanChuTri'
import NhomChiTieu from '../pages/QuanLyMucBaoCao/NhomChiTieu'
import ChiTieu from '../pages/QuanLyMucBaoCao/ChiTieu'
import PhanTo from '../pages/QuanLyMucBaoCao/PhanTo'
import NoiDungBaoCao from '../pages/QuanLyMucBaoCao/NoiDungBaoCao'
import ThietDatNguoiDung from '../pages/ThietDatNguoiDung'
import QuanLyHoSo from '../pages/QuanLyHoSo'
import QuanLyHangMuc from '../pages/QuanLyHangMuc'
import CongThucTongHop from '../pages/CongThucTongHop'

const RootLayout = styled(Layout)`
  && {
    min-height: 100vh;
`
const LayoutContent = styled(Layout.Content)`
  && {
    margin: 16px 16px 0;
  }
`
const ContentWrapper = styled.div`
  && {
    padding: 24px;
    background: #fff;
    min-height: 520px;
  }
`

function DashBoardPage () {
  const [login, setLogin] = useState(true)
  const [collapsed, setCollapsed] = useState(false)

  const loginReq = () => {
    setLogin(true)
  }

  const logoutReq = () => {
    setLogin(false)
  }

  const ExContext = React.createContext(login)

  const toggleSideBar = () => {
    setCollapsed(!collapsed)
  }
  let loginStatus = localStorage.getItem('loginStatus')

  return (
    <div className='App'>
      {loginStatus ? (
        <RootLayout>
          <Sidebar collapsed={collapsed} />
          <Layout>
            <Header
              toggleSideBar={toggleSideBar}
              collapsed={collapsed}
              logoutReq={logoutReq}
            />
            <LayoutContent>
              <ContentWrapper>
                <Switch>
                  <Route exact path='/home' component={HomePage} />
                  <Route exact path='/quanlydonvi' component={QuanLyDonVi} />
                  <Route
                    exact
                    path='/thietdatquitrinh'
                    component={ThietDatQuiTrinh}
                  />
                  <Route exact path='/nhomchitieu' component={NhomChiTieu} />
                  <Route exact path='/chitieu' component={ChiTieu} />
                  <Route exact path='/phanto' component={PhanTo} />
                  <Route
                    exact
                    path='/noidungbaocao'
                    component={NoiDungBaoCao}
                  />
                  <Route
                    exact
                    path='/thietdatnguoidung'
                    component={ThietDatNguoiDung}
                  />
                  <Route exact path='/quanlyhoso' component={QuanLyHoSo} />
                  <Route
                    exact
                    path='/thietdattieuchi'
                    component={ThietDatTieuChi}
                  />
                  <Route
                    exact
                    path='/quanlyhangmuc'
                    component={QuanLyHangMuc}
                  />
                  <Route
                    exact
                    path='/congthuctonghop'
                    component={CongThucTongHop}
                  />
                  <Route
                    exact
                    path='/quanlycoquanchutri'
                    component={QuanLyCoQuanChuTri}
                  />
                  <Redirect exact from='/' to='/home' component={HomePage} />
                </Switch>
              </ContentWrapper>
            </LayoutContent>
            <Footer />
          </Layout>
        </RootLayout>
      ) : (
        <LoginPage ExContext={ExContext} loginReq={loginReq} />
      )}
    </div>
  )
}

export default DashBoardPage

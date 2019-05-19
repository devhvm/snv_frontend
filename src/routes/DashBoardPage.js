import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import Header from '../components/Header'
import Sidebar from '../components/SideBar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
// import EditAbleCell from '../pages/MauBaoCao/textEditAbleCell'
import QuanLyDonVi from '../pages/QuanLyDonVi'
import ThietDatQuiTrinh from '../pages/ThietDatQuiTrinh'
import QuanLyMucBaoCao from '../pages/QuanLyMucBaoCao'
import ThietDatTieuChi from '../pages/ThietDatTieuChi'
import QuanLyCoQuanChuTri from '../pages/QuanLyCoQuanChuTri'
import ThietDatUser from '../pages/ThietDatUser'

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

  return (
    <div className='App'>
      {login ? (
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
                  <Route
                    exact
                    path='/quanlymucbaocao'
                    component={QuanLyMucBaoCao}
                  />
                  <Route
                    exact
                    path='/thietdattieuchi'
                    component={ThietDatTieuChi}
                  />
                  <Route
                    exact
                    path='/quanlycoquanchutri'
                    component={QuanLyCoQuanChuTri}
                  />
                  <Route exact path='/thietdatuser' component={ThietDatUser} />
                  {/* <Route */}
                  {/* exact */}
                  {/* path='/maubaocao/editAbleCell' */}
                  {/* component={EditAbleCell} */}
                  {/* /> */}
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

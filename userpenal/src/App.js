/* eslint-disable */ 
import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
const Index = React.lazy(() => import('./student/index'))
const CoedDefaultLayout = React.lazy(() => import('./student/coed/layout/DefaultLayout'))
// Containers


const Loginuser = React.lazy(() => import('././student/coed/views/pages/login/Login'))
const Signup = React.lazy(() => import('././student/coed/views/pages/register/Register'))
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/"  element={<Index />} />
            <Route  path="*" name="Home" element={<CoedDefaultLayout />} />
            <Route path="/coed/app/login" element={<Loginuser />} />
            <Route path="/coed/app/sign-up"  element={<Signup />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App

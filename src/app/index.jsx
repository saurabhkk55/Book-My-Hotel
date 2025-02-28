import React from 'react'
import Home from './home'
import Header from '@/components/layouts/header.layout'
import Footer from '@/components/layouts/footer.layout'
import HotelDetails from './hotel-details'
import { SigninPage, SignupPage } from './auth'
import Search from '@/features/search'

const App = () => {
  return (
    <div className='overflow-hidden'>
        <Header />
        <Home />
        {/* <HotelDetails /> */}
        {/* <SigninPage /> */}
        {/* <SignupPage /> */}
        <Footer />
    </div>
  )
}

export default App

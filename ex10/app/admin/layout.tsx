import AdminSidebar from '@/components/AdminSidebar'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

const layout = ({children} : {children : ReactNode}) => {
  return (
    <div className="w-full hfull">
        <Navbar/>
        <div className="flex">
            <AdminSidebar />
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default layout
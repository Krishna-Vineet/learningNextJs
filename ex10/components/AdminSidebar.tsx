import Link from 'next/link'
import React from 'react'

const AdminSidebar = () => {
  return (
    <aside className='w-50 flex flex-col bg-amber-300 h-max'>
        <Link className="p-2 m-2 bg-green" href='/admin'>Home</Link>
        <Link className="p-2 m-2 bg-green" href='/admin/dashboard'>Dashboard</Link>
        <Link className="p-2 m-2 bg-green" href='/admin/finance'>Finance Management</Link>
        <Link className="p-2 m-2 bg-green" href='/admin/usercontrol'>User Management</Link>
    </aside>
  )
}

export default AdminSidebar
import Link from 'next/link'
import React from 'react'

const UserSidebar = () => {
  return (
    <aside className='w-50 flex flex-row bg-amber-300 h-max'>
        <Link className="p-2 m-2 bg-green" href='/home'>Home</Link>
        <Link className="p-2 m-2 bg-green" href='/settings'>Settings</Link>
        <Link className="p-2 m-2 bg-green" href='/profile'>Profile</Link>
    </aside>
  )
}

export default UserSidebar
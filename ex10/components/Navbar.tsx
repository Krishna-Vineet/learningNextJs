import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full p-4 flex'>
        <div className="rounded-full bg-emerald-900 text-amber-50 p-2">K</div>
        <div className="left-auto flex space-around">
            <Link href='/home'>Go to User</Link>
            <Link href='/admin'>Go to Admin</Link>
        </div>
    </div>
  )
}

export default Navbar
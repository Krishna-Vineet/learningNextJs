import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
        <div>Welcome to home page</div>
        <span>Go to dashboard: <Link href='/dashboard'>Dashboard</Link></span>
    </>
  )
}

export default Home
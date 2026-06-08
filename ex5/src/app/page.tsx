'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router = useRouter();
  return (

    <div>
      
      <h1>Welcome to website</h1>
      <button onClick={() => router.push('/login')}>Login</button>
      <button onClick={() => router.push('/userinfo')}>User Info</button>

    </div>
  )
}

export default Home
'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Dashboard = () => {
    const router = useRouter();

  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={() => router.push('/home')}>Home</button>
    </div>
  )
}

export default Dashboard
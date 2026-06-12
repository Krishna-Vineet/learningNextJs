import { redirect } from 'next/navigation'
import React from 'react'

const Old = () => {
    redirect('/new')
  return (
    <div>Old Page</div>
  )
}

export default Old
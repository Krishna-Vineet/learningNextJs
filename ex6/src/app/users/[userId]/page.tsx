import React from 'react'

const page = async ({params} : {params : {userId : string}}) => {

    const {userId} = await params
   
  return (
    <div>{userId}</div>
  )
}

export default page
'use client'

import * as axios from '@/utils/api/requests'

import React from 'react'

export default function Home() {
  const [users, setUsers] = React.useState<UserResponse>([])

  const handleClick = async () => {
    const getUserById = await axios.getUsersId({ params: { id: 'oo' } })
    setUsers(getUserById.data)
    console.log(users)
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

'use client'

import * as axios from '@/config/api/requests/user'

import React, { useEffect } from 'react'

export default function Home() {
  const [users, setUsers] = React.useState<UserResponse>()

  useEffect(() => {
    const fetchData = async () => {
      const get = await axios.getUserById({
        params: { id: 'aabe6f01-0d37-4cd5-ba21-3f3986e3c5dd' },
      })
      setUsers(get.data)
      return get
    }

    fetchData()
  }, [])

  if (!users?.success) {
    return <p>Error</p>
  } else {
    return (
      <div>
        <h1>Home</h1>
        {users && <p>{users.data.username}</p>}
      </div>
    )
  }
}

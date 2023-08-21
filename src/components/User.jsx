import React from 'react'

const User = ({el}) => {
  return (
    <div className='user'>
      <h1>{el.id}</h1>
      <h2>{el.name}</h2>
      <h3>{el.email}</h3>
    </div>
  )
}

export default User

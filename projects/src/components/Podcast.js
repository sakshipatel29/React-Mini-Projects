import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Podcast = () => {
  const user = useContext(UserContext);
  return (
    <div>Podcast for You!!! {user}</div>
  )
}

export default Podcast
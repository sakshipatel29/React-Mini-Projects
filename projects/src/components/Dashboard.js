import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Dashboard = () => {
  const user = useContext(UserContext);
  return (
    <div>Hello! {user}!! How are you doing??? </div>
  )
}

export default Dashboard;
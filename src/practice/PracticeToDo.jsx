import React, { useState } from 'react'
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import { v4 as uuidv4 } from 'uuid'

function PracticeToDo() {
  const usersData = []

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>Datos De La Tabla</h1>
      <div className="row">
        <div className="col-6">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="col-6">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default PracticeToDo;
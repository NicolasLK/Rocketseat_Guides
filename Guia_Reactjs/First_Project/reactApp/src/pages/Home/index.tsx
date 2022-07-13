import React, { useState, useEffect } from 'react'
import './styles.css'
import { Card, CardProps } from '../../components/card'

type ProfileResponse = {
  name: string,
  avatar_url: string
}

type User = {
  name: string,
  avatar: string
}

export function Home() {
  const [userName, setUserName] = useState("")
  const [users, setUsers] = useState<CardProps[]>([])
  const [user, setUser] = useState<User>({} as User)
  const url = "https://api.github.com/users/NicolasLK"

  function handleAddUser() {
    const newUser = {
      name: userName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    }

    setUsers(prevState => [...prevState, newUser])
  }

  useEffect(() => {
    //corpo do useEffect
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json() as ProfileResponse
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }

    fetchData()

  }, [])

  return (
    <div className="container">
      <header>
        <h1>Lista de Usuários</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
    
    <input 
      type="text" 
      placeholder="Digite o nome..."
      onChange={e => setUserName(e.target.value)}
    />
    <button type="button" onClick={handleAddUser}>
      Adicionar
    </button>

    {
      users.map(user => (
        <Card 
          key={user.time}
          name={user.name} 
          time={user.time}
        />
      ))
    }
    </div>
  )
}



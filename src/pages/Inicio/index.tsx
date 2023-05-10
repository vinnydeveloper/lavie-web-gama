import { useContext } from "react"

import { Link } from "react-router-dom"

import { userContext } from "../../context/user"


export default function Inicio() {
  const { user } = useContext(userContext)


  if (!user) return <Link to="/login">Link para login</Link>


  return <>
    <h1>Inicio</h1>
    <h1>Você está logado com o usuario: {user?.name}</h1>

  </>
}
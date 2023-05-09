import { Link } from "react-router-dom"


export default function Inicio(){
  return <h1>Inicio
    <Link to="/login">Link para login</Link>
  </h1>
}
import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import Modal from "../../components/Modal"
import Button from "../../components/Button"


export default function Inicio() {
  const [openModal, setOpenModal] = useState(false)

  //vai ser executado na criação/ primeira render do componente
  useEffect(() => {
    alert("O componente foi criado")
  }, [])

  // vai ser executado quando o estado openModal foir alterado
  useEffect(() => {
    alert("O modal foi alterado")
  }, [openModal])

  return <h1>Inicio
    <Link to="/login">Link para login</Link>

    <Button text="Abrir Modal" onClick={() => setOpenModal(true)} />
    <Modal content={(<div>
      <p>Você tem certeza que quer deletar esse psicologo?</p>
      <p>Essa é uma ação permanente, não há como recuperar os dados.</p>
    </div>)} title="Exluir Psicologo" isOpened={openModal} closeModal={() => setOpenModal(false)} />
  </h1>
}
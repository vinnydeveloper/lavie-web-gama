import { Container, NoRegister, SectionLeft, SectionRight, Wrapper } from "./style";
import Input from "../../components/Input";
import { FormEventHandler, useState } from "react";
import Button from "../../components/Button";
import Divisor from "../../components/Divisor";
import { Link } from "react-router-dom";
import { servicePsicologo } from "../../services/psicologos";

export default function CadastroPsicologo() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [apresentacao, setApresentacao] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

  const cadastrar: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    try {
      const response = await servicePsicologo.cadastrarPsicologo({
        nome: name,
        email: email,
        senha: password,
        apresentacao
      })

      if (response.status === 201) {
        alert('Cadastro Efetuado')

        setName('')
        setPassword('')
        setCheckPassword('')
        setEmail('')
      }

    } catch (error) {
      alert("Deu erro")
    }
  }

  return <Container>

    <SectionRight />
    <SectionLeft>
      <h1>La Vie</h1>
      <p>Preencha as informações a baixo para se cadastrar!</p>

      <form onSubmit={cadastrar}>
        <Wrapper>
          <label htmlFor="">Nome Completo</label>
          <Input required type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <label htmlFor="">Email</label>
          <Input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <label htmlFor="">Apresentacao</label>
          <Input required type="text" value={apresentacao} onChange={(e) => setApresentacao(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <label htmlFor="">Senha</label>
          <Input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <label htmlFor="">Confirme sua Senha</label>
          <Input required type="password" value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)} />
        </Wrapper>


        <Button text="Registrar" />
      </form>
      <Divisor />

      <NoRegister>Já é  cadastrado? Acesse a plataforma,  <Link to="/login">clique aqui!</Link></NoRegister>


    </SectionLeft>
  </Container >
}
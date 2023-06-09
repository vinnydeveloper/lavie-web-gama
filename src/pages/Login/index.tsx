import { Container, NoRegister, SectionLeft, SectionRight, Wrapper } from "./style";
import Input from "../../components/Input";
import { FormEventHandler, useContext, useState } from "react";
import Button from "../../components/Button";
import Divisor from "../../components/Divisor";
import { Link } from "react-router-dom";
import { servicePsicologo } from "../../services/psicologos";
import { userContext } from "../../context/user";
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(userContext)

  const logar: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    try {
      const response = await servicePsicologo.login({
        email: email,
        senha: password,
      })

      if (response.status === 200) {
        alert('Login Efetuado')

        setPassword('')
        setEmail('')

        setUser({
          name: response.data.nome,
          email: response.data.email,
          token: response.data.token
        })
      }

    } catch (error) {
      alert("Deu erro")
    }
  }

  return <Container>

    <SectionRight />
    <SectionLeft>
      <h1>La Vie</h1>
      <p>Faça login para acessar a plataforma</p>

      <form onSubmit={logar}>
        <Wrapper>
          <label htmlFor="">Email</label>
          <Input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <label htmlFor="">Senha</label>
          <Input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Wrapper>

        <Button text="Acessar" />
      </form>
      <Divisor />

      <NoRegister>Não tem cadastro? Se registre, <Link to="/cadastro">clique aqui!</Link></NoRegister>

      <Link to={"/"}>Ir para incio</Link>
    </SectionLeft>
  </Container >
}
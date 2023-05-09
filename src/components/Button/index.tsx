import { Container } from "./style"

interface ButtonProps {
  text?: string
  visible?: boolean
  onClick?: ()=> void
  destructive?: boolean
}

export default function Button({
  text = 'Cadastrar',
  visible = true,
  onClick,
  destructive
}: ButtonProps){
  onClick
  return <>{ visible && <Container destructive={destructive} onClick={onClick}>{text}</Container>}</>
}
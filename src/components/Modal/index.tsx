import { ReactNode } from "react";
import Button from "../Button";
import { Overlayer, Container, Footer, Header, Main } from "./style";

interface ModalProps {
  content: ReactNode
  title: ReactNode
  isOpened: boolean
  closeModal(): void
}

export default function Modal({ content, title, isOpened, closeModal }: ModalProps) {


  if (!isOpened) return <div />

  return (<Overlayer>
    <Container>
      <Header>
        {title}
      </Header>
      <Main>
        {content}
      </Main>
      <Footer>
        <Button text="Cancelar" onClick={closeModal} />
        <Button text="Deletar" destructive />
      </Footer>
    </Container>
  </Overlayer>)
}
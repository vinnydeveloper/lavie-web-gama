interface ButtonProps {
  text?: string
  visible?: boolean
  onClick?: ()=> void
}

export default function Button({
  text = 'Cadastrar',
  visible = true,
  onClick
}: ButtonProps){
  onClick
  return <>{ visible && <button onClick={onClick}>{text}</button>}</>
}
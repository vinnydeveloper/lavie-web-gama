import { ChangeEventHandler } from "react"
import { Container } from "./style"

interface InputProps {
  type: string,
  value: string | number | readonly string[] | undefined
  onChange: ChangeEventHandler<HTMLInputElement>
  required?: boolean
}
export default function Input({ type, value, onChange, required }: InputProps) {
  return <Container type={type} value={value} onChange={onChange} required={required} />
}
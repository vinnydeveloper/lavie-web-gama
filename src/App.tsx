import Button from './components/Button'

export default function App() {


  return (
    <>
      <Button visible={true}  />
      <Button text="Salvar" onClick={()=> alert("Foi salvo")} />
    
    </>
  )
}


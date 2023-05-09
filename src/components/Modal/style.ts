import styled from  'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  max-width: 520px;

`
export const Overlayer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
position: fixed;
background: rgb(0,0,0,35%);
top: 0;
left: 0;
`

export const Header = styled.div`
  font-size: 20px;
  padding: 24px;
`

export const Main = styled.div`
  font-size: 16px;
  padding: 24px;
`


export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  padding: 24px;
  border-radius: 12px;
  background: #F7F7F9;
`
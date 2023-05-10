import { styled } from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;

  h1{
    font-size: 60px;
  }
`

export const SectionRight = styled.div`
  width: 50%; 
  background: #2E65F3;
`


export const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  width: 50%; 
  background: #fff;
  padding: 80px;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`
export const NoRegister = styled.p`
text-align: center;
`
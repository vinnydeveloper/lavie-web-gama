import styled, { css } from 'styled-components'


interface ContainerProps{
  destructive?: boolean  
}
export const Container = styled.button<ContainerProps>`
  padding: 12px 20px;
  background: #2E65F3;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  border: 0;
  outline: 0;

  &:hover {
    background: #0047FF;
    cursor: pointer;
  }

  ${(props)=>{
    return props.destructive && css`
      background: #F32D2D;

      &:hover {
        background: #FF0000;
        cursor: pointer;
      } 
    `
  }}
`
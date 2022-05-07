import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 5000px;
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-top: 100vh;
    position: sticky;
    top: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -400px;
  `}
`

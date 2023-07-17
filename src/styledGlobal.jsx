import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

export const Corpo = styled.body`
    display: flex;
    background-color: grey;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
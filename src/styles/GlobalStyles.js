import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme'

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;        
}

body {
    background-color: ${theme.colors.lightblue};
    width: 100%;
    overflow-x: hidden;
    font-family: "Roboto", sans-serif;
}

a {
    text-decoration: none;
}


`
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;        
}

body {
    background-color: #283D55;
    width: 100%;
    overflow-x: hidden;
    font-family: "Roboto", sans-serif;
}

a {
    text-decoration: none;
}


`
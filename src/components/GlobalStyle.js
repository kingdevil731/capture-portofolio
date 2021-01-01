import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: #1b1b1b;
    font-family: 'Inter', san-serif;
    overflow-x: hidden;
}
button {
    font-weight: bold;
    font-size: 1.1rem;
    padding: 1rem 2rem;
    cursor: pointer;
    border: 3px solid #23d997;
    background: transparent;
    border-radius: 8px;
    color: white;
    transition: all 0.5s ease;
    &:hover {
        background-color: #23d997;
        color: white; 
    }
}
h2 {
    font-weight: lighter;
    font-size: 4rem;
}
h3 {
    color: white;
}
h4 {
    font-weight: bold;
    font-size: 2rem;
}
span {
     font-weight: bold;
    color: #23d997; 
}
a {
    font-size: 1.4rem;
}
p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
    font-family: roboto;
    background-color:#8C11BE;
}
h1{
        font-weight: 400;
        font-size: 32px;
        margin-left: 5%;
        color: #ffffff;
    }
h2{
    font-weight: 700;
    font-size:24px;
    margin-left:5% ;
    color: white;
}
h3{
    font-weight: 400;
    font-size:14px;
    margin-left:5% ;
    color: white;
    line-height: 5px;
}
`
export default GlobalStyle;
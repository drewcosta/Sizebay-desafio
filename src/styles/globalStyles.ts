import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6{
  color: ${props => props.theme.colors.grey};
  letter-spacing: 0;
}

p, span, ul{
  color: ${props => props.theme.colors.grey};
  letter-spacing: 0;
}

button, input, textarea {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: ${props => props.theme.colors.grey};
}

input[type="text"]{
  font-size: ${props => props.theme.fontSizes.text_sm};
  font-weight: normal;
  font-style: normal;
  color: ${props => props.theme.colors.grey};
  border: none;
  border-radius: inherit;
  outline: none;
}
`
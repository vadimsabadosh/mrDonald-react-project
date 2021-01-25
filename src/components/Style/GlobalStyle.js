import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html{
  box-sizing:border-box;
}
*,
*::before,
*::after{
  box-sizing:inherit;
}
body{
  margin:0;
  background:#f0f0f0;
  font-family: 'Roboto', sans-serif;
  font-size:20px;
  color:black;
}
a{
  text-decoration:none;
  color:inherit;

}
ul{
  list-style:none;
  margin:0;
  padding:0;
}
h1,h2,h3{
  margin:0;
  padding:0;
  font-family: 'Pacifico', cursive;
}
p{
  margin:0;
  padding:0;
}
img{
  max-width: 100%;
  height:auto;
}
button{
  cursor:pointer;
  outline:none;
}
input, button{
  font-family: inherit;
}
input[type="number"] {
  -moz-appearance:textfieled;
  -webkit-appearance:textfieled;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
  -webkit-appearance:none;

}
`;
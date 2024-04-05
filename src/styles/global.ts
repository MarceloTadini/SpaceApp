import { createGlobalStyle } from 'styled-components'
import GandhiSansBold from './fonts/GandhiSans-Bold.otf'
import GandhiSansRegular from './fonts/GandhiSans-Regular.otf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GandhiSansRegular';
    src: local('Gandhi Sans Regular'), local('GandhiSansRegular'), url(${GandhiSansRegular});
  }

  @font-face {
    font-family: 'GandhiSansBold';
    src: local('Gandhi Sans Bold'), local('GandhiSansBold'), url(${GandhiSansBold});
  }

   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
 
  }
  html {
    font-size: 62.5%;
    font-family: GandhiSansRegular;
  }

  body::-webkit-scrollbar{
    display: none;

  }
  
  body  {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.blue__gradient};
  }
  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
  button {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
`

export default GlobalStyle
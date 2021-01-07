import { createGlobalStyle } from "styled-components"
import "@fontsource/roboto"
import "@fontsource/roboto/100.css"

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: "Roboto";
	vertical-align: baseline;

}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body{
}

.button {
    display: flex;
    margin: 0.5rem;
    border: 1px solid white;
    border-radius: 2rem;
    padding: 0.5rem 0;
    min-width: 76vw;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    text-decoration: none;
    color: white;
    text-decoration: none;
  }

  @media (min-width: 600px)
{
  .button {
    min-width: 20vw;
  }
}
  .button:hover{
    background:#4aaae0;
    border: #4aaae0;
  }



`
export default GlobalStyles

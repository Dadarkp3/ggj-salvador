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

.mouse_scroll {
	display: block;
	width: 24px;
	height: 0px;
	margin-top: 20px;
}


.m_scroll_arrows
{
  display: block;
  width: 5px;
  height: 5px;
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
  transform: rotate(45deg);
   
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  margin: 0 0 3px 4px;
  
  width: 16px;
  height: 16px;
}


.unu
{
  margin-top: 1px;
}

.unu, .doi, .trei
{
    -webkit-animation: mouse-scroll 1s infinite;
    -moz-animation: mouse-scroll 1s infinite;
    animation: mouse-scroll 1s infinite;
  
}

.unu
{
  -webkit-animation-delay: .1s;
  -moz-animation-delay: .1s;
  -webkit-animation-direction: alternate;
  
  animation-direction: alternate;
  animation-delay: alternate;
}

.doi
{
  -webkit-animation-delay: .2s;
  -moz-animation-delay: .2s;
  -webkit-animation-direction: alternate;
  
  animation-delay: .2s;
  animation-direction: alternate;
  
  margin-top: -6px;
}

.trei
{
  -webkit-animation-delay: .3s;
  -moz-animation-delay: .3s;
  -webkit-animation-direction: alternate;
  
  animation-delay: .3s;
  animation-direction: alternate;
  
  
  margin-top: -6px;
}

.mouse {
  height: 35px;
  width: 24px;
  border-radius: 14px;
  transform: none;
  border: 2px solid white;
  top: 170px;
}

.wheel {
  height: 5px;
  width: 2px;
  display: block;
  margin: 5px auto;
  background: white;
  position: relative;
  
  height: 4px;
  width: 4px;
  border: 2px solid #fff;
  -webkit-border-radius: 8px;
          border-radius: 8px;
}

.wheel {
  -webkit-animation: mouse-wheel 0.6s linear infinite;
  -moz-animation: mouse-wheel 0.6s linear infinite;
  animation: mouse-wheel 0.6s linear infinite;
}

@-webkit-keyframes mouse-wheel{
   0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(6px);
    -ms-transform: translateY(6px);
    transform: translateY(6px);
  }
}
@-moz-keyframes mouse-wheel {
  0% { top: 1px; }
  25% { top: 2px; }
  50% { top: 3px;}
  75% { top: 2px;}
  100% { top: 1px;}
}
@-o-keyframes mouse-wheel {

   0% { top: 1px; }
  25% { top: 2px; }
  50% { top: 3px;}
  75% { top: 2px;}
  100% { top: 1px;}
}
@keyframes mouse-wheel {

   0% { top: 1px; }
  25% { top: 2px; }
  50% { top: 3px;}
  75% { top: 2px;}
  100% { top: 1px;}
}

@-webkit-keyframes mouse-scroll {

  0%   { opacity: 0;}
  50%  { opacity: .5;}
  100% { opacity: 1;}
}
@-moz-keyframes mouse-scroll {

  0%   { opacity: 0; }
  50%  { opacity: .5; }
  100% { opacity: 1; }
}
@-o-keyframes mouse-scroll {

  0%   { opacity: 0; }
  50%  { opacity: .5; }
  100% { opacity: 1; }
}
@keyframes mouse-scroll {

  0%   { opacity: 0; }
  50%  { opacity: .5; }
  100% { opacity: 1; }
}



`
export default GlobalStyles

import styled from "styled-components"

export const Container = styled.section`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  min-height: 100vh;
  width: 100vw;
  background: rgb(37, 33, 98);
  background: -moz-linear-gradient(
    177deg,
    rgba(37, 33, 98, 1) 0%,
    rgba(61, 45, 100, 1) 62%,
    rgba(87, 55, 105, 1) 100%
  );
  background: -webkit-linear-gradient(
    177deg,
    rgba(37, 33, 98, 1) 0%,
    rgba(61, 45, 100, 1) 62%,
    rgba(87, 55, 105, 1) 100%
  );
  background: linear-gradient(
    177deg,
    rgba(37, 33, 98, 1) 0%,
    rgba(61, 45, 100, 1) 62%,
    rgba(87, 55, 105, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#252162",endColorstr="#573769",GradientType=1);
  h1 {
    font-size: 5vw;
  }
  p {
    font-weight: 100;
    font-size: larger;
    margin: 0.5rem 0;
  }
`

export const ImageContainer = styled.div`
  max-width: 500px;
  height: 100%;
`

export const ImgLogo = styled.img`
  width: 50vw;
  max-width: 500px;
  width: 60vw;
  min-width: 250px;
`

export const Links = styled.div`
  display: flex;
  flex-flow: column;

  @media (min-width: 600px) {
    flex-flow: row;
  }
`

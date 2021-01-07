import React from "react"
import Logo from "../../images/logo.svg"
import Button from "../Button"

// Styles
import { Container, ImgLogo, Links } from "./styles"

const Header = () => {
  return (
    <Container>
      <ImgLogo data-sal="fade" data-sal-duration="1500" src={Logo} alt="logo" />
      <p data-sal="fade" data-sal-duration="1500">
        Salvador - Bahia&nbsp;&nbsp;|&nbsp;&nbsp;2021
      </p>
      <Links>
        <Button url="#about" text="Sobre" />
        <Button url="#about" text="Inscrição" />
      </Links>
    </Container>
  )
}
export default Header

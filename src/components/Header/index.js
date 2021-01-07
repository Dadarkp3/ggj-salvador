import React from "react"
import Logo from "../../images/logo.svg"
import Button from "../Button"
import MouseScroll from "../MouseScroll"

// Styles
import { Container, ImgLogo, Links } from "./styles"

const Header = () => {
  return (
    <Container>
      <ImgLogo data-sal="fade" data-sal-duration="1500" src={Logo} alt="logo" />
      <p data-sal="fade" data-sal-duration="1500" data-sal-delay="100">
        Salvador - Bahia&nbsp;&nbsp;|&nbsp;&nbsp;2021
      </p>
      <Links data-sal="fade" data-sal-duration="1500" data-sal-delay="300">
        <Button url="#about" text="Sobre" />
        <Button url="#about" text="Inscrição" />
      </Links>
      <MouseScroll
      />
    </Container>
  )
}
export default Header

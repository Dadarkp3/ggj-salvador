import React from "react"
import { Link } from "gatsby"

const Button = ({ url, text }) => {
  return (
    <Link className="button" to={url}>
      {text}
    </Link>
  )
}
export default Button

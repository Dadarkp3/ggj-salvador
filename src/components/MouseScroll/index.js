import React from "react"

const MouseScroll = () => {
  return (
    <div
      class="mouse_scroll"
      data-sal="fade"
      data-sal-duration="1500"
      data-sal-delay="100"
    >
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <div>
        <span class="m_scroll_arrows unu"></span>
        <span class="m_scroll_arrows doi"></span>
        <span class="m_scroll_arrows trei"></span>
      </div>
    </div>
  )
}

export default MouseScroll

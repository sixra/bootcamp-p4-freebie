import React from 'react'
import "./Header.scss"

const Header = (props) => {
  return (
    <div className="heroImage" style={{ height: props.height + "vh", maxHeight: props.maxHeight + "rem", minHeight: props.minHeight + "rem" }}>

    </div>
  )
}

export default Header

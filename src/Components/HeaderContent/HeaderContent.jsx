import React from 'react'
import './HeaderContent.css'
import MenuLink from '../MenuLink/MenuLink'

function HeaderContent() {
  return (
    <div id='HeaderContent'>

      <div>
      <MenuLink linkName="Home" url="home"/>
      <MenuLink linkName="About" url="about"/>
      <MenuLink linkName="Contact" url="contact"/>
      <MenuLink linkName="Login" url="login"/>
    </div>
    </div>
   
  )
}

export default HeaderContent
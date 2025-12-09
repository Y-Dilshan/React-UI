import React from 'react'
import './BodyContent.css'

function BodyContent(props) {
  return (
    <div id='BodyContent'>
        <p>BodyContent</p>
        {props.children}
    </div>
  )
}

export default BodyContent
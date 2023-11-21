import React from 'react'
import "./title.css"

export default function Title(props) {
  return (
    <div className='col-12 title'>
        <div className='mt-5 mt-5'>
            {props.text}
        </div>
    </div>
  )
}

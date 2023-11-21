import React from 'react'
import "../pageTemplates/title.css"

export default function Title(props) {
  return (
    <div className='col-12 title text-center'>
        <div className='mt-5'>
            {props.text}
        </div>
    </div>
  )
}

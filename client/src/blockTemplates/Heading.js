import React from 'react'
import './Heading.css'
export default function Heading(props) {

  const {level, text}= props

  return (
    <>
      {level===1 && <div className= 'heading1'>
      {text.map((block) => {
        return (
          <span key={block.id}>
            {block.plain_text}
          </span>
        );
      })}
        </div>}

        {level===2 && <div className= 'heading2'>
        {text.map((block) => {
        return (
          <span key={block.id}>
            {block.plain_text}
          </span>
        );
      })}
        </div>}

        {level===3 && <div className= 'heading3'>
        {text.map((block) => {
        return (
          <span key={block.id}>
            {block.plain_text}
          </span>
        );
      })}
        </div>}
    </>
  )
}

import React from 'react'
import './card.css'
export default function BulletListItem(props) {
  const {text}= props
  return (
    <div className='outter'>
      <div className="quote-container m-2 mt-5">
      {text.map((block) => {
        return (
          <div className='note yellow ' key={block.id}>
            
            {block.plain_text}
          </div>
        );
      })}    
    </div>
    </div>
  )
}

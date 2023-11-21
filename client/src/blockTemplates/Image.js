import React from 'react'
import "./image.css"
export default function Image(props) {
  const {data} = props
  return (
    <div className='par m-5'>
        <div  style={{ marginRight: "10px", position: "relative", display: "inline-block" }}>
          <div className='upside'></div>
          <div className='arrow-up'></div>
          <div className='imgcard'>
            <img className='img' key={data.id}  src={data?.file?.url || data?.external?.url} alt='no image'/>

          </div>
          <div className='arrow-down'></div>
          <div className='downside'></div>
        </div>
        <br/>
        <div>{data.caption[0]?.plain_text}</div>
    </div>
  )
}

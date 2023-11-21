import React from 'react'
import back from '../images/blank_bg.png'
export default function Image(props) {
  const {imgUrl, title} = props
  return (
    <div className='mt-5 '>
        <div  style={{ marginRight: "", position: "relative", display: "inline-block",}}>
          <div className='upside'></div>
          <div className='arrow-up'></div>
          <img className='m-2' style={{height:"250px", width:"300px",}} src={imgUrl? imgUrl:back} alt='Image not uploaded'/>
          <div className='arrow-down'></div>
          <div className='downside'></div>
        </div>
        <div className='para' style={{fontWeight:"bold", textAlign:"left", marginLeft:"10px", fontSize:"22px"}}>{title}</div>
    </div>
  )
}

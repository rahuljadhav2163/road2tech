import React from 'react'
import "./Coursecard.css"
import { Link } from 'react-router-dom'
function Coursecard({img,title,dec,price,id}) {
  return (
    <div>
      <div className='card-mod'>
        <img className='img-crs' src={img}/>
        <h2 className='crs-title'>{title}</h2>
        <img className='img-stars' src={'https://www.pinclipart.com/picdir/big/347-3473608_1920-x-500-26-transparent-4-star-rating.png'}/>
        <p className='crs-dec'>{dec}</p>
        <p className='crs-price'> ₹ {price} /-</p>
       
      </div>
    </div>
  )
}

export default Coursecard

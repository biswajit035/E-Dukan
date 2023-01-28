import React from 'react'
import { useNavigate, useNavigation } from 'react-router';
import "../Style/css/main.css";

const Card = ({img, title, price}) => {
let navigate = useNavigate()

const handleClick = () =>{
    navigate ("product/12345")
}

    return (
        <div className="card" onClick={handleClick}>
            <div className="img_container">
                <img src={img} alt="" />
            </div>
            
            <div className="container">

                <div className="pro-name">{`${title.slice(0,35)}${title.length>35 ? "...":""}`}</div>
                <div className='dis'>Up to 29% off</div>
                <div className='price'>₹{price}</div>
            </div>
        </div>
    )
}

export default Card
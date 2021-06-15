import React from 'react'
// import './card-style.scss';
 const Card = (props) => {
  return (
    <div className="ssss">
        <div>
        <img src={props.picture} className="img-fluid"  />
        <h6 className="px-3 mt-4">{props.title}</h6>
        </div>
        <div className="px-3">
        <p>
          {props.text}
        </p>
        <div className="d-flex justify-content-between " >
         <span>{props.date}</span>
         <a href="#"  className="text-decoration-none">{props.link}</a>
        </div>
        </div>
    </div>
  )
}

export  default Card
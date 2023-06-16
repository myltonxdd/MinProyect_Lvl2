import React from 'react'
import Card from 'react-bootstrap/Card';
import "./CardNode.css"




function CardNode({props}) {
    let estrella= <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
    let superH = <span className={(props.superHost==true?'superHost':"")}>{(props.superHost==true?"SUPER HOST":"")}</span>
    return (
        <div>
            
            <Card border="light" style={{width:"19rem", height:"21rem"}}>
                <Card.Img variant="top" className='h-75 object-fit-cover' src={props.photo} />
                <Card.Body className='h-25' >
                    <Card.Text className='d-flex justify-content-between mt-0'>
                    {props.superHost==true?superH:""}
                    <span>{props.type}</span> 
                    <span>{props.beds} {(props.beds>0)?"beds":null} </span> 
                    <span className='text-black'>{estrella}{props.rating}</span> 
                    </Card.Text>
                    <Card.Title style={{fontSize:"14px"}}>{props.title}</Card.Title>
                </Card.Body>
            </Card> 
        </div>
    )
}

export default CardNode
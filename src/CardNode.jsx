import React from 'react'
import Card from 'react-bootstrap/Card';
import "./CardNode.css"
import {Stack } from "react-bootstrap";





function CardNode(props) {
    
    ///trae lista

    const filterList = props.array
    
    /////iconos

    let estrella= <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
    let superH = <span className={(filterList.superHost==true?'superHost':"")}>{(filterList.superHost==true?"SUPER HOST":"")}</span>

    
    
    
    /////RETURN//////////

    return (
        
        <div>
            
            <div className="d-flex justify-content-between align-items-center mt-5 pt-3">
                <h2>Stays in Findland</h2>
                <div className="fs-5"> {filterList.length}+stays</div>
            </div>


            <Stack className="d-flex flex-wrap justify-content-center" direction="horizontal" gap={5}>
                {filterList.map((el,index) => {
                return (
                    <Card border="light" style={{width:"19rem", height:"21rem", cursor:"pointer"}}key={index} >
                        <Card.Img variant="top" className='h-75 object-fit-cover' src={el.photo} />
                        <Card.Body className='h-25' >
                            <Card.Text className='d-flex justify-content-between mt-0'>
                            {el.superHost==true?superH:""}
                            <span>{el.type}</span> 
                            <span>{el.beds} {(el.beds>0)?"beds":null} </span> 
                            <span className='text-black'>{estrella}{el.rating}</span> 
                            </Card.Text>
                            <Card.Title className='prende' style={{fontSize:"14px"}}>{el.title}</Card.Title>
                        </Card.Body>
                    </Card> 
                )
                })}
            </Stack>

            
            

            
        </div>
    )
}

export default CardNode
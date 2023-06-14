import React from 'react'
import Card from 'react-bootstrap/Card';
import "./CardNode.css"




function CardNode(props) {

    
    
  
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.url} />
                <Card.Body>
                    <Card.Text>
                    <span className='superHost'>{props.superHost}</span> 
                    <div className='callout'>{props.description} {props.beds} {props.bedsTrue}</div> 
                    </Card.Text>
                    <Card.Title>{props.tittle}</Card.Title>
                </Card.Body>
            </Card> 
    </div>
    )
}

export default CardNode
import React from 'react'
import { Button } from 'react-bootstrap'
import "./varFunct.css"

function VarFunct() {

    let lupa = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>

   /*  const OPCIONES =[
    {id:1, nombre: "pedro"},
    ]

    const [lista, setLista]=useState(OPCIONES)
    
    function myFunction(e) {
    
    let inputValue = e.target.value.toLowerCase()
    const FILTERED = OPCIONES.filter((el) => {
        return el.nombre.includes(inputValue)
    })

    setLista(FILTERED);
    } */
    

  return (
    <section className='pagBox'>
        
        <div className="input-group mt-5">
            <input type="text" aria-label="First name" className="form-control" />
            <input type="text" aria-label="Last name" className="form-control" />
            <Button type="button" className='btn btn-danger rounded-4' style={{border:"none", margin:"red"}}>{lupa} Search</Button>
        </div>


        <input
            type="text"
            id="myInput"
            onkeyup="myFunction()"
            placeholder="Search for names.."
        />
        <ul className='list-group'>
            <li className='list-group-item'>
            <a href="#">Adele</a>
            </li>
            <li className='list-group-item'>
            <a href="#">Agnes</a>
            </li>
            <li className='list-group-item'>
            <a href="#">Billy</a>
            </li>
            <li className='list-group-item'>
            <a href="#">Bob</a>
            </li>
            
        </ul>
    </section>



   
  )
}

export default VarFunct
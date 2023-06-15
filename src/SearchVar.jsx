import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function SearchVar() {

  let lupa = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>



  const OPCIONES =[
    {id:1, nombre: "pedro"},
  ]

  const [lista, setLista]=useState(OPCIONES)
 
  function myFunction(e) {
    
    let inputValue = e.target.value.toLowerCase()
    const FILTERED = OPCIONES.filter((el) => {
      return el.nombre.includes(inputValue)
    })

    setLista(FILTERED);
  }






  return (
    <div className='d-flex justify-content-between' >
      <div>
        <img src="src\img\logo.png" alt="logo" />
      </div>
      
      <Form className="input-group shadow-sm p-1 mb-5 bg-white rounded" style={{border:"1px solid #d2d2d2"}}>
        <Form.Control
          type="search"
          placeholder="Add guest"
          className="me-4"
          aria-label="Search"
          onKeyUp={myFunction}
          style={{border:"none", margin:"red"}}
        />
        <Button variant='trasparent' className='input-group-text' style={{border:"none", margin:"red"}}>{lupa}</Button>
      </Form>
          
    </div>
    
  );
}

export default SearchVar;
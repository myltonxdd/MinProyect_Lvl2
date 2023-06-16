import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import VarFunct from './VarFunct';


function SearchVar(props) {

  let lupa = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>


  const [lista, setLista]=useState(false)
 
  function myFunction() {
    setLista(!lista)
    

    }
  const filerClose = () => setLista(false)
  const filerOpen = () => setLista(true)

  const filterList = props.array1
  
  
  return (
    <div className='d-flex justify-content-between bg-white align-items-center' style={{position:"sticky", top:"0", zIndex:"5"}} >
      {!lista?<VarFunct clasTot="pagBox" filerOpen={filerOpen} array={filterList}/>:<VarFunct clasTot="show" filerClose={filerClose} array={filterList} />}
      <div>
        <img src="src\img\logo.png" alt="logo" />
      </div>
      <Form className="input-group shadow-sm m-1 bg-white rounded d-flex align-items-center " style={{border:"1px solid #d2d2d2", width:"25rem"}}>
      <Form.Control
          type="search"
          placeholder="Add location"
          aria-label="Search"
          onClick={myFunction}
        />
        <Form.Control
          type="search"
          placeholder="Add guest"
          aria-label="Search"
          onClick={myFunction}
        />
        <Button variant='trasparent' className='input-group-text' onClick={myFunction}>{lupa}</Button>
      </Form>
      
    </div>
    
  );
}

export default SearchVar;
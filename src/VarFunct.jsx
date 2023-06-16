import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import "./varFunct.css"

function VarFunct(props) {

    let lupa = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>

    /////trae el array///////////

    const filterList = props.array

    ////filtraaaaaa///////////////////
    
    const [lista, setLista]=useState(filterList)
    
    function myFunction(e) {
    
    let inputValue = e.target.value.toLowerCase()

    const FILTERED = filterList.filter((el) => {
        return el.city.toLowerCase().includes(inputValue)
    })

    setLista(FILTERED);
    }
    
    ///////funcion para igual botones//////////
    function iguala (){
        
    }
    
    ////////LADO DERECHO/////////////////////

    const [adults, setAdult] = useState(() => parseInt(localStorage.getItem('adults')) || 0);
    const [children, setChild] = useState(() => parseInt(localStorage.getItem('children')) || 0);

    const actualiza = (setValue, value) => {
        setValue(value);
    };
    
    const increment = (setValue, value) => {
        actualiza(setValue, value + 1);
    };

    const decrement = (setValue, value) => {
        if (value > 0) {
            actualiza(setValue, value - 1);
        }
    };

    //////////////RETURN//////////////////////
    
  return (
    <section className={props.clasTot} /* onClick={props.filerClose} */>
        
        <div className='w-100 pt-5 bg-white '>
            <div className="input-group  w-75">
                <input type="text" className="form-control" placeholder="Add location" onKeyUp={myFunction} />
                <input type="text" className="form-control" placeholder="Add Guest" />
                <Button type="button" className='btn btn-danger rounded-4 w-25' style={{border:"none", margin:"red"}}>{lupa} Search</Button>

            </div>
            
        </div>
        
        <div className='d-flex w-100 bg-white pt-5 flex-raw align-items-center'>
              
            <ul className='list-group w-50 border border-0 ' >
                    {lista.map((el,i)=>(<li className='list-group-item' key={i}><a>{el.city}</a> </li>) )}
                    <li className='list-group-item'>
                    <a onClick={iguala} value={"Helsinki"}>Helsinki, Finland</a>
                    </li>
                    <li className='list-group-item'>
                    <a onClick={iguala} value={"Turku"}>Turku, Finland</a>
                    </li>
                    <li className='list-group-item'>
                    <a onClick={iguala} value={"Vaasa"}>Vaasa, Finland</a>
                    </li>
                    <li className='list-group-item'>
                    <a onClick={iguala} value={"Oulu"}>Oulu, Finland</a>
                    </li>
                    
            </ul>

            <div className='m-4 px-4 d-flex w-50 flex-column'>
                <div className='pt-2'>
                    <h4 className='fs-6 m-0' >Adults</h4>
                    <div className="fs-6 text-body-tertiary">Ages 13 or above</div>
                    <form className='d-flex flex-raw pt-2 align-items-center'>
                        <button className='bg-white border rounded m-2' onClick={(e) => {decrement(setAdult, adults) }}>-</button>
                        <div className="num">{adults}</div>
                        <button className='bg-white border rounded m-2' onClick={(e) => {increment(setAdult, adults) }}>+</button>
                    </form>
                </div>

                <div className='pt-2'>
                    <h4 className='fs-6 m-0'>Children</h4>
                    <div className="fs-6 text-body-tertiary">Ages 2-12</div>
                    <form className='d-flex flex-raw pt-2 align-items-center'>
                        <button className='bg-white border rounded m-2' onClick={(e) => {decrement(setChild, children) }}>-</button>
                        <div className="num">{children}</div>
                        <button className='bg-white border rounded m-2' onClick={(e) => {increment(setChild, children) }}>+</button>
                    </form>
                </div>
            </div>
        </div>

        
    </section>



   
  )
}

export default VarFunct
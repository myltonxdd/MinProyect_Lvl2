import React, {useState } from 'react'
import { Button } from 'react-bootstrap'
import "./varFunct.css"



function VarFunct(props) {

    //////ICONSSSSS//////////////
    
    let mapa = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>)
    
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
    
    console.log(lista)


    //////IZQUIERDA O DERECHA////////////

    const [univ, setUniv] = useState(true)
    
    const cambia1 = () =>setUniv(true)
    const cambia2 = () =>setUniv(false)



    ///////funcion para igual botones//////////
    const [ciudad, setCiudad] = useState("")
    
    function iguala (e){
        e.preventDefault()
        setCiudad(e.target.value)

    }
    
    ////////LADO DERECHO/////////////////////

    const [adults, setAdult] = useState(0);
    const [children, setChild] = useState(0);

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
    <section className={props.clasTot} >
        
        <div className='w-100 p-5 bg-white d-flex justify-content-center'>
            <div className="w-100 d-flex shadow-sm rounded-5">
                <div className="forma form-control ">
                    <p className='mb-2' style={{fontSize:"12px"}}>LOCATION</p>
                    <input className='w-100' defaultValue={ciudad} type="text" style={{outline:"none"}} onClick={cambia1} placeholder="Add location" onKeyUp={myFunction} />
                </div>
                <div className="forma form-control">
                    <p className='mb-2' style={{fontSize:"12px"}}>GUESTS</p>
                    <input className='w-100' Value={adults + children} type="text" style={{outline:"none"}} onClick={cambia2} placeholder="Add Guest" />
                </div>
                <Button onClick={props.filerClose} type="button" className='btn btn-danger rounded-4 w-25' style={{border:"none", margin:"red"}}>{lupa} Search</Button>

            </div>
            
        </div>
        
        {/* <div className='d-flex w-100 bg-white px-5 flex-raw justify-content-center'> */}
        <div className={univ?'d-flex w-100 bg-white px-5 flex-raw justify-content-start':'d-flex w-100 bg-white px-5 flex-raw justify-content-end'} >

            {/* <form className='list-group border-none bg-white w-50 my-4 px-4' > */}              
            <form className={univ?'list-group border-none bg-white w-50 my-4 px-4':'list-group border-none bg-white w-50 my-4 px-4 d-none'} >
                <li className='list-group-item d-flex border-0'>
                <button className='red d-flex align-items-center bg-transparent' onClick={iguala} value={"Helsinki"}>{mapa} Helsinki, Finland</button>
                </li>
                <li className='list-group-item border-0'>
                <button className='red d-flex align-items-center bg-transparent' onClick={iguala} value={"Turku"}>{mapa} Turku, Finland</button>
                </li>
                <li className='list-group-item border-0'>
                <button className='red d-flex align-items-center bg-transparent' onClick={iguala} value={"Vaasa"}>{mapa} Vaasa, Finland</button>
                </li>
                <li className='list-group-item border-0'>
                <button className='red d-flex align-items-center bg-transparent' onClick={iguala} value={"Oulu"}>{mapa} Oulu, Finland</button>
                </li>
                    
            </form>

            <div className={univ?'my-4 d-flex w-50 flex-column d-none':'my-4 d-flex w-50 flex-column '} >
                <div className='p-2'>
                    <h4 className='fs-6 m-0' >Adults</h4>
                    <div className="fs-6 text-body-tertiary">Ages 13 or above</div>
                    <form className='d-flex flex-raw pt-2 align-items-center'>
                        <button className='bg-white border rounded m-2' onClick={(e) => {e.preventDefault();decrement(setAdult, adults) }}>-</button>
                        <div className="num">{adults}</div>
                        <button className='bg-white border rounded m-2' onClick={(e) => {e.preventDefault();increment(setAdult, adults) }}>+</button>
                    </form>
                </div>

                <div className='p-2'>
                    <h4 className='fs-6 m-0'>Children</h4>
                    <div className="fs-6 text-body-tertiary">Ages 2-12</div>
                    <form className='d-flex flex-raw pt-2 align-items-center'>
                        <button className='bg-white border rounded m-2' onClick={(e) => {e.preventDefault();decrement(setChild, children) }}>-</button>
                        <div className="num">{children}</div>
                        <button className='bg-white border rounded m-2' onClick={(e) => {e.preventDefault();increment(setChild, children) }}>+</button>
                    </form>
                </div>
            </div>
        </div>

        
    </section>

  )
}

export default VarFunct
import { Children, createContext } from 'react';

const MyContext = createContext();

const Arrayless = ({Children}) =>{

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

    const data ={lista};
    return(
        <MyContext.Provider value={data}>{Children}</MyContext.Provider>
    )
}

export {Arrayless};
export default MyContext;

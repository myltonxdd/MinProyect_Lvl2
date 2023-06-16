import { useEffect, useState } from "react";
import "./App.css";
import CardNode from "./CardNode";
import { Container, Stack } from "react-bootstrap";
import SearchVar from "./SearchVar";
import VarFunct from "./VarFunct";




function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  // Puedes ver la variable data en consola.
  /* console.log(data); */

  const [numStays, setStays] = useState()
  useEffect(() => {
    setStays(data.length)
 }, [data]);
  

 /* const filterList = data.map((el,i) =>{
    return el.city
 }) */
  const filterList = data
  
  return (
    <Container className="mt-4">
      <SearchVar country={data.country} array1={filterList} />
      
      <div className="d-flex justify-content-between align-items-center mt-5 pt-3">
        <h2>Stays in Findland</h2>
        <div className="fs-5"> {numStays}+stays</div>
      </div>
      
      <Stack className="d-flex flex-wrap justify-content-center" direction="horizontal" gap={5}>
        {data.map((el,index) => {
          return (
          <CardNode props={el} key={index}/>
          )
        })}
      </Stack>
    </Container>
  );
}

export default App;

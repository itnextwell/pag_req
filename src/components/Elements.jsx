import { useState } from 'react'

const Elements = () => {

    //El primer elemento es el estado y el segundo es el que cambia el estado
  //first guarda el valor de una variable 
  //setfirst cambia el valor 
  const [first, setfirst] = useState(0)
  const [setselectValue, setSetselectValue] = useState('Prioridad 1')
  
  console.log(first)

    //solo se ejecuta cuando envíe el formulario

    const handleClick=()=>{

        setfirst(1)

    }
    //toma los valores cuando se cambia de opción 
    //se pone un parametro e osea evento y se pone su parametro
    const handleChange=(e)=>{
      //se guarda en un estado
      setSetselectValue(e.target.value)
    }

    const handleSumit=(e)=>{
      //para no recargar 
      e.preventDefault()
      //solo lo visualizo con un estado lo guardo
      console.log(e.target.inputValue.value)
      e.target.inputValue.value=''
    }



  return (
    <section>
      <p>Descripción</p>
      <input type="text" id="inputValue" placeholder='Ingrese Descripción' />
        
        <p>Justificación</p>
        <input type="text" id="inputValue" placeholder='Ingrese Justificación' />
        <p>Responsable</p>
         <input type="text"  placeholder='Ingrese Responsable' />
        
        <div>
        <p>Seleccione la prioridad</p>

        <select onChange={handleChange}>
          <option value="Prioridad 1">Prioridad 1</option>
          <option value="Prioridad 2">Prioridad 2</option>
          <option value="Prioridad 3">Prioridad 3</option>


        </select>
            
        </div>

        <div>
          <p>Imagen</p>
        </div>
      <form onSubmit={handleSumit}>

      

        <p>Proveedor</p>

         <input type="text"  id='inputValue' placeholder='Ingrese Proveedor' />


        <button onClick={handleClick}>Enviar</button>

      </form>
        
    </section>
  )
}

export default Elements
import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
  const [element, setElement] = useState()

  

  //Read

  const getAllElement=()=>{
    axios.get(`${url}/elementos`)

    .then(res=>setElement(res.data))

    .catch(err=>console.log(err))

  }
  //Create

  const createNew=(data)=>{
    axios.post(`${url}/elementos`,data)
    .then(res=>{
    setElement([...element,res.data])
    console.log(res.data)
    })
    .catch(err=>console.log(err))
  }

  //Delete

  const deleteElement=(id)=>{
    axios.delete(`${url}/elementos/${id}`)
    .then(res=>{
        console.log(res.data)
        const filterElement=element.filter(elem=>elem.id!==id)
        setElement(filterElement)
    })
    .catch(err=>console.log(err))
  }
  
  //update
  const updateElement=(id,data)=>{
    axios.put(`${url}/elementos/${id}`,data)
    .then(res=>{
        console.log(res.data)
        const infoUpdate=element.map(elem=>{
            if(elem.id===id){
                return data
            }else{
                return elem
            }
        })
        setElement(infoUpdate)
    })
    .catch(err=>console.log(err))
  }


  return[element,getAllElement,createNew, deleteElement,updateElement]
}

export default useFetch
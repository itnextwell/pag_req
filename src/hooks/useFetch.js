import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
  const [element, setElement] = useState()

  

  //Read

  const getAllElement=(path)=>{
    axios.get(`${url}${path}`)

    .then(res=>setElement(res.data))

    .catch(err=>console.log(err))

  }
  //Create

  const createNew=(path,data)=>{
    axios.post(`${url}${path}`,data)
    .then(res=>{
    setElement([...element,res.data])
    console.log(res.data)
    })
    .catch(err=>console.log(err))
  }

  //Delete

  const deleteElement=(path,id)=>{
    axios.delete(`${url}${path}/${id}`)
    .then(res=>{
        console.log(res.data)
        const filterElement=element.filter(elem=>elem.id!==id)
        setElement(filterElement)
    })
    .catch(err=>console.log(err))
  }
  
  //update el orden si importa de los compoenetes 
  const updateElement=(path,id,data)=>{
    axios.put(`${url}${path}/${id}`,data)
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
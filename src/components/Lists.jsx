


const Lists = ({element, deleteElemById,setUpdateInfo}) => {

    const handleDelete=()=>{
        deleteElemById('/elementos',element.id)
        

    }
    
    const handleUpdate=()=>{
        setUpdateInfo(element)          
    }

    return (
        <article>

            <h2>Solicitud de elementos #{element.id}</h2>

            <ul>
                <li><span>Descripcion </span><span>{element.description}</span></li>
                <li><span>Cantidad </span><span>{element.amount} unid</span></li>
                <li><span>Justificación </span><span>{element.justification}</span></li>
                <li><span>Prioridad </span><span>{element.priority}</span></li>
                <li><span>Responsable </span><span>{element.responsible}</span></li>
                <li><span>Proveedor </span><span>{element.supplier}</span></li>
            </ul>

            <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
            <button onClick={handleUpdate}><i className='bx bx-edit-alt'></i></button>

            
            
            
        </article>
    )
}

export default Lists
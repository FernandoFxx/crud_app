import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function User() {
    const [users,setUsers] = useState();
    useEffect(() => {
        axios.get(`http://localhost:3006/users/${id}`)
        .then((res) =>{
            setUsers(res.data);
        })
    },[]);

    const {id} = useParams();

  return (
        <>
            <Link to={`/`} className='btn btn-warning mb-4 shadow'>Regresar al Inicio</Link>
            {users && (
                <div className='card d-flex flex-row w-75 m-auto gap-3 shadow'>
                    <div className="d-flex flex-column w-50">
                        <span className='border-bottom mb-1'>Nombre</span>
                        <span className='border-bottom mb-1'>Apellidos</span>
                        <span className='border-bottom mb-1'>Correo</span>
                        <span className='border-bottom mb-1'>Telefono</span>
                    </div>
                    <div className="d-flex flex-column w-50">
                        <span className='border-bottom mb-1 h-100'>{users.name}</span>
                        <span className='border-bottom mb-1 h-100'>{users.last}</span>
                        <span className='border-bottom mb-1 h-100'>{users.email}</span>
                        <span className='border-bottom mb-1 h-100'>{users.phone}</span>
                    </div>

                </div>
    )};
    </>
  )
}

export default User
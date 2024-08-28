import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Home() {

    const [user,setUser] = useState([]);
    const loadUser = () => {
        axios.get("http://localhost:3006/users")
        .then((res) =>{
            setUser(res.data.reverse());
        });
    }

    useEffect(() => {
        loadUser();
    },[]);

    function Delete(id){
        axios.delete(`http://localhost:3006/users/${id}`)
        .then(loadUser());
    }

  return (
    <div className="container">
        <h2>Crud App con JSON Server</h2>
        <Link to={`/add-user`} className="btn btn-success my-4">Crear Usuario</Link>
        
        <div className="table-responsive">
            <table className="table my-4 shadow">
                <thead className='table-light'>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody className='align-middle'>
                    {user.map((data, index)=>(
                    <tr key={index}>
                        <th>{index + 1}</th>
                        <th>{data.name}</th>
                        <th>{data.last}</th>
                        <th>{data.email}</th>
                        <th>{data.phone}</th>
                        <th>
                            <Link to={`/users/${data.id}`} className='btn btn-secondary'>ver</Link>
                            <Link to={`/edit-user/${data.id}`} className='btn btn-primary ms-3'>editar</Link>
                            <button onClick={() => Delete(data.id)} className='btn btn-danger ms-3'>Eliminar</button>
                        </th>
                    </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Home
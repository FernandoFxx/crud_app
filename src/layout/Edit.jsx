import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {

    const [name, setName] = useState("");
    const [last, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    const data = {
        name: name,
        last: last,
        email: email,
        phone: phone
    }

    useEffect(() => {
        axios.get(`http://localhost:3006/users/${id}`)
        .then((res) =>{
            setName(res.data.name);
            setLastName(res.data.last);
            setEmail(res.data.email);
            setPhone(res.data.phone);
        })
    },[]);

    function Update(e){
        e.preventDefault();
        axios.put(`http://localhost:3006/users/${id}`, data)
        .then(navigate('/'));
    }

  return (
    <div className="h-100 w-100">
        <h1 className="mb-5">Agregar Usuario</h1>
        <form className="w-50 m-auto">
            <div className="form-group shadow rounded">
                <input
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Ingresa tu nombre"
                >
                </input>
            </div>
            <div className="form-group mt-3 shadow rounded">
                <input
                    value={last}
                    onChange={(e)=>setLastName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="last1"
                    placeholder="Ingresa tus apellidos"
                >
                </input>
            </div>
            <div className="form-group mt-3 shadow rounded">
                <input
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type="text"
                    className="form-control"
                    id="email1"
                    placeholder="Ingresa tu correo"
                >
                </input>
            </div>
            <div className="form-group mt-3 shadow rounded">
                <input
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    type="text"
                    className="form-control"
                    id="phone1"
                    placeholder="Ingresa tu telefono"
                >
                </input>
            </div>

            <button onClick={Update} className="btn btn-primary mt-3 w-100 shadow"> Agregar Usuario</button>

        </form>
    </div>
  )
}

export default Edit
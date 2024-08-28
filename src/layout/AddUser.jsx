import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {

    const [name, setName] = useState("");
    const [last, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    const data = {
        name: name,
        last: last,
        email: email,
        phone: phone
    }

    function Submit(e){
        e.preventDefault();
        axios.post("http://localhost:3006/users", data)
        .then(navigate('/'))
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

            <button onClick={Submit} className="btn btn-primary mt-3 w-100 shadow"> Agregar Usuario</button>

        </form>
    </div>
  );
}

export default AddUser;

import { InfoUsuario } from "./infoUsuario/InfoUsuario";
import axios from "axios";
import { useState, useEffect } from "react";

export const App = () => {
    const urlApi = "https://localhost:7100/usuarios";
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get(urlApi)
        .then((response) => {
            console.log(response.data)
            setUsuarios(response.data.listaUsuarios)
        })
        .catch((error) => {
            console.error(error);
        })   
    }, []);

    return(
        <main className="container">
            <h1 className="text-center">Gerenciamento de Usuários</h1>
            <section className="border rounded p-5 mt-4 shadow-lg" style={{ maxHeight: '500px', overflowY: 'auto' }}>
            {usuarios.map((usuario) => {
                return <InfoUsuario key={usuario.id} nome={usuario.nome} email={usuario.email} idade={usuario.idade}/>
            })}
            </section>
        </main>
    );
}
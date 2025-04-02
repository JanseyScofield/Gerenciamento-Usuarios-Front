import { InfoUsuario } from "./infoUsuario/InfoUsuario";
import axios from "axios";
import { useState, useEffect } from "react";

export const App = () => {
    const urlApi = "https://localhost:7100/usuarios";
    const [usuarios, setUsuarios] = useState([]);
    const [nomePesquisado, setNomePesquisado] = useState("");

    const receberTodosUsuarios = () =>{
        axios.get(urlApi)
            .then((response) => {
                setUsuarios(response.data.listaUsuarios);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(receberTodosUsuarios, []);

    const pesquisarUsuarioNome = () => {
        if(!nomePesquisado){
            receberTodosUsuarios();
        }
        else{
            axios.get(urlApi + "/" + nomePesquisado)
            .then((response) => {
                setUsuarios([response.data]);
            })  
            .catch((error) =>{
                const mensagem = "Usuário não encontrado";

                const usuarioNaoEncontrado = {
                    id : -1,
                    nome : mensagem,
                    email : "",
                    idade : ""
                };

                setUsuarios([usuarioNaoEncontrado]);
            });
        }
    }

    return (
        <main className="container">
            <h1 className="text-center">Gerenciamento de Usuários</h1>
            <div className="d-flex" style={{ marginBottom: "-1rem", marginTop: "2rem" }}>
                <input 
                    className="border rounded shadow-sm w-50 form-control-lg mt2" 
                    type="text" 
                    value={nomePesquisado} 
                    placeholder="Digite um nome"
                    onChange={(e) => setNomePesquisado(e.target.value)}
                />
                <button className="btn btn-lg border h-100" onClick={pesquisarUsuarioNome}><i className="bi bi-search"></i></button>
            </div>
            <section className="border rounded p-5 mt-4 shadow-lg" style={{ maxHeight: '700px', overflowY: 'auto' }}>
                {usuarios.map((usuario) => {
                    return <InfoUsuario key={usuario.id} nome={usuario.nome} email={usuario.email} idade={usuario.idade} />
                })}
            </section>
        </main>
    );
}
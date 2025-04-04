import { InfoUsuario } from "../infoUsuario/InfoUsuario.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PaginaInicial = () => {
    const urlApi = "https://localhost:7100/usuarios";
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);
    const [requestOK, setRequestOk] =  useState();
    const [nomePesquisado, setNomePesquisado] = useState("");

    const receberTodosUsuarios = () =>{
        axios.get(urlApi)
            .then((response) => {
                if(response.data.listaUsuarios.length == 0){
                    const mensagem = "Não há usuarios cadastrados";

                    const usuariosNaoCadastrados = {
                        id : -1,
                        nome : mensagem,
                        email : "",
                        idade : ""
                    };
                    setUsuarios([usuariosNaoCadastrados]);
                }
                else{
                    setUsuarios(response.data.listaUsuarios);
                }
                setRequestOk(true);
            })
            .catch((error) => {
                setRequestOk(false);
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
            .catch(() =>{
                const usuarioNaoEncontrado = {
                    id : -1,
                    nome : "Usuario não encontrado",
                    email : "",
                    idade : ""
                };

                setUsuarios([usuarioNaoEncontrado]);
            });
        }
    }

    return (
        <section className="container">
            <h1 className="text-center">Gerenciamento de Usuários</h1>
            <div className="d-flex justify-content-between" style={{ marginBottom: "-1rem", marginTop: "2rem" }}>
                <div>
                <input 
                    className="border rounded shadow-sm w-75 form-control-lg mt2" 
                    type="text" 
                    value={nomePesquisado} 
                    placeholder="Digite um nome"
                    onChange={(e) => setNomePesquisado(e.target.value)}
                />
                <button className="btn btn-lg border h-100" onClick={pesquisarUsuarioNome}><i className="bi bi-search"></i></button>
                </div>
                <button className="btn btn-lg border h-100" onClick={() => navigate("/cadastrar")}><i class="bi bi-plus-square-fill"></i></button>
            </div>
            <section className="border rounded p-5 mt-4 shadow-lg" style={{ maxHeight: '475px', overflowY: 'auto' }}>
                { requestOK ? 
                    usuarios.map(usuario =>  <InfoUsuario key={usuario.id} nome={usuario.nome} email={usuario.email} idade={usuario.idade} />) :
                    <h2>Erro ao carregar os usuários</h2>
                }
            </section>
        </section>
    );
}
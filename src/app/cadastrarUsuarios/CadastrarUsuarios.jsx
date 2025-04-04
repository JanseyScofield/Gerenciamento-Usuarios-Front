import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CadastrarUsuarios = () => {
    const navigate = useNavigate();
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [emailUsuario, setEmailUsuario] = useState("");
    const [idadeUsuario, setIdadeUsuario] = useState(0);

    const validarFormulario = () =>{
        if(nomeUsuario.length <= 2){
            alert("Nome inválido, digite novamente.");
            return;
        }

        if(emailUsuario.length <= 2){
            alert("E-mail inválido, digite novamente.");
            return;
        }

        if(idadeUsuario <= 0){
            alert("Idade inválida, digite novamente.");
            return;
        }
    }

    return(
        <section className="container d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center">Cadastrar Usuário</h1>
            <div className="border rounded p-5 mt-4 shadow-lg" style={{ width: "491.5px", maxWidth: "90%"}}>
                <form>
                    <div className="d-flex flex-column ">
                        <label htmlFor="nome" className="form-label p-2 fs-4">Nome </label>
                        <input type="text" className="form-control-lg shadow-sm " id="nome" value={nomeUsuario} onChange={e => setNomeUsuario(e.target.value)}/>
                        <label htmlFor="email" className="form-label p-2 fs-4">E-mail</label>
                        <input type="email" className="form-control-lg shadow-sm" id="email" value={emailUsuario} onChange={e => setEmailUsuario(e.target.value)}/>
                        <label htmlFor="idade" className="form-label p-2 fs-4">Idade</label>
                        <input type="number" className="form-control-lg shadow-sm" id="idade" value={idadeUsuario} onChange={e => setIdadeUsuario(e.target.value)}/>
                        <button type="button" onClick={validarFormulario} className="btn mt-3 btn-lg border h-100 shadow-sm">Cadastrar</button>
                    </div>
                </form>
            </div>
            <div className="d-flex justify-content-end" style={{ marginBottom: "-1rem", marginTop: "2rem"}}>
                <button className="btn btn-lg border h-100 shadow-lg" onClick={() => navigate("/")}><i class="bi bi-arrow-return-left"></i></button>
            </div>
        </section>
    );
}
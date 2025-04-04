import { use, useState } from "react";

export const CadastrarUsuarios = () => {
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
        <section className="container">
            <h1 className="text-center">Cadastrar Usuário</h1>
            <div className="border rounded p-5 mt-4 shadow-lg" style={{ maxHeight: '700px', overflowY: 'auto' }}>
                <form action="" method="POST">
                    <div className="d-flex flex-column mb-3">
                        <label htmlFor="nome" className="form-label p-2">Nome </label>
                        <input type="text" className="form-control shadow-sm " id="nome" value={nomeUsuario} onChange={e => setNomeUsuario(e.target.value)}/>
                        <label htmlFor="email" className="form-label p-2">E-mail</label>
                        <input type="email" className="form-control shadow-sm" id="email" value={emailUsuario} onChange={e => setEmailUsuario(e.target.value)}/>
                        <label htmlFor="idade" className="form-label p-2">Idade</label>
                        <input type="number" className="form-control shadow-sm" id="idade" value={idadeUsuario} onChange={e => setIdadeUsuario(e.target.value)}/>
                        <button type="button" onClick={validarFormulario} className="btn mt-3 btn-lg border h-100 shadow-sm">Cadastrar</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
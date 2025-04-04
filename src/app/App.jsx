import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { PaginaInicial } from "./paginaInicial/PaginaInicial"
import { CadastrarUsuarios } from "./cadastrarUsuarios/CadastrarUsuarios";

export const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaInicial/>}/>
                <Route path="/cadastrar" element={<CadastrarUsuarios/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export const InfoUsuario = (props) =>{

    const style = {gap: "2rem"}

    return(
        <div className="p-4 mt-5 border rounded shadow-sm">
            <h2>{props.nome}</h2>
            <div className="d-flex" style={style}>
                <p>E-mail: {props.email}</p>
                <p>Idade: {props.idade}</p>
            </div>
        </div>
    );
}
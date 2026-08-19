function ComentarioComum ({imagemurl, nomeusuario, tempoemmeses, comentario, numerolikes, numerorespostas})
{
    return <>

        <div className="comentario-completo">
            <img className="imagemcom" src={imagemurl}></img>
            <div className="infocom">
                <p>@{nomeusuario} <span className="tempo">há {tempoemmeses} meses</span></p>
                <p className="comentario-texto">{comentario}</p>
                <div>
                    <button className="linkdislike">❤ <span className="numspam">{numerolikes}</span></button>
                    <button className="linkdislike" id="dislike">♡</button>
                    <button className="linkdislike">Responder</button>
                </div>
                <button className="respostas">⌵ {numerorespostas} Respostas</button>
            </div>
        </div>
    
    </>
}
export default ComentarioComum;
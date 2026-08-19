import '../../styles/comments.css';
import ComentarioComum from './comment-model.jsx';
import { commentCount, comments } from '../../data/comments.js';
import { icons } from '../../data/assets.js';

function Comentarios ()
{
    return <div className="Comentarios">
        <h2>{commentCount}</h2>
        <div className='meuComentario'>
            <div className='img' style={{backgroundImage: `url(${icons.channelAvatar})`}}></div>
            <div className='extras'>
                <p>Adicione um comentário</p>
                <input type="text" id='meuinput'/>
                <hr/>
                <div className='bots'>
                    <button className='cancelar bot'>Cancelar</button>
                    <button className='comentar bot'>Comentar</button>
                </div>
            </div>
        </div>

        {comments.map((c, i) =>
            <ComentarioComum
                key={i}
                imagemurl={c.imagemurl}
                nomeusuario={c.nomeusuario}
                tempoemmeses={c.tempoemmeses}
                comentario={c.comentario}
                numerolikes={c.numerolikes}
                numerorespostas={c.numerorespostas}
            />
        )}
    </div>
}
export default Comentarios;

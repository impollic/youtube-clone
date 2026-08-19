import '../../styles/comments.css';
import ComentarioComum from './comment-model.jsx';

function Comentarios ()
{
    return <div className="Comentarios">
        <h2>32.207 comentários</h2>
        <div className='meuComentario'>
            <div className='img'></div>
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

        <ComentarioComum 
            imagemurl={"https://i.redd.it/kim-pines-from-scott-pilgrim-takes-off-straight-up-looks-v0-jifn7g5hrylc1.jpg?width=735&format=pjpg&auto=webp&s=8a8e10fb35970cc529a473ec559d1213192b101f"} 
            nomeusuario={"ShadowVortex"} 
            tempoemmeses={"3"} 
            comentario={"DISTURBING THE BEES\nTHEY GOT IN MY EYES"} 
            numerolikes={"432"} 
            numerorespostas={"2"}
        />

        <ComentarioComum 
            imagemurl={"https://i.pinimg.com/736x/9d/eb/9d/9deb9d070e153b6c70e4cccc81a14305.jpg"} 
            nomeusuario={"CrimsonEcho"} 
            tempoemmeses={"6"} 
            comentario={"I love how at the beginning it sounds like a mix between 'Persona' from Persona 1 (PS1) and 'Wake Up, Get Up, Get Out There' from Persona 5 !"} 
            numerolikes={"234"} 
            numerorespostas={"45"}
        />

        <ComentarioComum 
            imagemurl={"https://i.pinimg.com/736x/00/80/e4/0080e4c248e0928dc2c522ab72f0f1cb.jpg"} 
            nomeusuario={"EchoPhoenix"} 
            tempoemmeses={"1"} 
            comentario={"Honestly i think most of the instrumental versions are better"} 
            numerolikes={"12"} 
            numerorespostas={"1"}
        />

        <ComentarioComum 
            imagemurl={"https://preview.redd.it/0vgt63yautj71.png?width=900&format=png&auto=webp&s=8748d2febfef77c38976c81780575432ad7acb03"} 
            nomeusuario={"DreamChaser"} 
            tempoemmeses={"2"} 
            comentario={"Jamiroquai"} 
            numerolikes={"867"} 
            numerorespostas={"345"}
        />

        <ComentarioComum 
            imagemurl={"https://wallpapers-clan.com/wp-content/uploads/2022/10/pokemon-77.jpg"} 
            nomeusuario={"QuantumLynx"} 
            tempoemmeses={"7"} 
            comentario={"While extended, you feel that it's a secret agent theme"} 
            numerolikes={"684"} 
            numerorespostas={"345"}
        />

        <ComentarioComum 
            imagemurl={"https://pbs.twimg.com/profile_images/1317228891870793730/ICNBYNn6_400x400.jpg"} 
            nomeusuario={"ObsidianFlame"} 
            tempoemmeses={"12"} 
            comentario={"persona 1? tf"} 
            numerolikes={"1,2 mil"} 
            numerorespostas={"103"}
        />

        <ComentarioComum 
            imagemurl={"https://i.pinimg.com/474x/d8/8d/1f/d88d1f5dae54140fa201843f85d64759.jpg"} 
            nomeusuario={"SolarEclipse"} 
            tempoemmeses={"13"} 
            comentario={"the beginning its a persona 1 reference"} 
            numerolikes={"53"} 
            numerorespostas={"7"}
        />
    </div>
}
export default Comentarios;
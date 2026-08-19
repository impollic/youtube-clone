import '../../styles/video-body.css';
import '../../styles/video-description.css';
import Comentarios from '../comment/comments.jsx';
import { mainVideo } from '../../data/videos.js';
import { icons } from '../../data/assets.js';

function Video ()
{
    return <div className='Video'>
        <div className='Video-local' style={{backgroundImage: `url(${icons.videoPlaceholder})`}}>
            <div id='vid'></div>
            <div id='controles'>
                <div>
                <button>▶</button>
                <button>❚❚</button>
                <button>◀</button>
                <button>🕪</button>
                <p>{mainVideo.videoTime}</p>
                </div>
                <div>
                <button>🖵</button>
                <button>⚙</button>
                <button>⛶</button>
                </div>
            </div>
            <div id='barra'></div>
            <div id='barraNormal'></div>
        </div>
        <div className='Video-descs'>
            <div className='desc-principal'>
                <h2>{mainVideo.title}</h2>
                <div className='canal'>
                    <img src={mainVideo.channelImage} alt="img"/>
                    <div>
                     <h4>{mainVideo.channelName}</h4>
                     <p>{mainVideo.subscribers}</p>
                    </div>
                    <button id='inscrever'>Inscrever-se</button>
                </div>
                <div className='curtir'>
                    <button className='curtir-b'>❤ {mainVideo.likes}</button>
                    <button className='curtir-b sqr'>↺  </button>
                    <button className='curtir-b'>➦  Compartilhar</button>
                    <button className='curtir-b sqr'>...</button>
                </div>
            </div>
            <div className='desc-secundaria'>
                <p>{mainVideo.viewsAndDate}</p>
                {mainVideo.description.map((line, i) =>
                    <p key={i}>{line}</p>
                )}
                <p><strong>Mostrar Menos</strong></p>
            </div>
        </div>
        <Comentarios/>
    </div>
}
export default Video;

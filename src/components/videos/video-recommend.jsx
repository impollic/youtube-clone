import '../../styles/video-body.css';
import VideoComp from './video-recommend-model.jsx';
import { recommendedVideos, filterButtons } from '../../data/videos.js';

function Coments ()
{
    return <div className='Coments'>
        <div className='coment-nav'>
            <button>&lt;</button>
            {filterButtons.map((btn, i) =>
                <button key={i} id={i === 0 ? 'todos' : undefined}>{btn}</button>
            )}
            <button>&gt;</button>
        </div>
        {recommendedVideos.map((video, i) =>
            <VideoComp key={i} img={video.img} duracao={video.duracao} titulo={video.titulo} autor={video.autor} views={video.views}/>
        )}
    </div>
}
export default Coments;

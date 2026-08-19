import Video from '../components/videos/video-main.jsx';
import Coments from '../components/videos/video-recommend.jsx';

function Corpo () {
    return (
    <div className='main-section'>
        <Video/>
        <Coments/>
        <footer>feito por impollic_ em <span>React</span>, 03/03/2025 </footer>
    </div>
    )
}
export default Corpo;
import Video from '../components/videos/video-main.jsx';
import Coments from '../components/videos/video-recommend.jsx';
import { footerData } from '../data/assets.js';

function Corpo () {
    return (
    <div className='main-section'>
        <Video/>
        <Coments/>
        <footer>feito por {footerData.author} em <span>{footerData.framework}</span>, {footerData.date} </footer>
    </div>
    )
}
export default Corpo;

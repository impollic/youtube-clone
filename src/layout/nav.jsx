import '../styles/navbar.css';
import { navData } from '../data/nav.js';
import { icons } from '../data/assets.js';

function Nav () {
    return (<>
        <nav>
            <div className='logotype'>
                <button className='button-operation' id='stripes'>☰</button>
                <button className='button-operation' id='logo' style={{backgroundImage: `url(${icons.logo})`}}></button>
                <p className='name'>{navData.brandName}<span>{navData.brandSuffix}</span></p>
            </div>
            <div className='inputsymbolaudio'>
                <input type="text" placeholder={navData.searchPlaceholder}/>
                <button className='button-operation' id='audio' style={{backgroundImage: `url(${icons.micIcon})`}}></button>
            </div>
            <div className='channel'>
                <button className='button-operation create'> <span id='plus'>+</span>{navData.createButton}</button>
                <button className='button-operation' id='not' style={{backgroundImage: `url(${icons.notifIcon})`}}></button>
                <button className='button-operation' id='ca' style={{backgroundImage: `url(${icons.channelAvatar})`}}></button>
            </div>
        </nav>
    </>)
}
export default Nav;

import '../styles/navbar.css';

function Nav () {
    return (<>
        <nav>
            <div className='logotype'>
                <button className='button-operation' id='stripes'>☰</button>
                <button className='button-operation' id='logo'></button>
                <p className='name'>PollicTube<span>BR</span></p>
            </div>
            <div className='inputsymbolaudio'>
                <input type="text" placeholder='Pesquisar'/>
                <button className='button-operation' id='audio'></button>
            </div>
            <div className='channel'>
                <button className='button-operation create'> <span id='plus'>+</span>Criar</button>
                <button className='button-operation' id='not'></button>
                <button className='button-operation' id='ca'></button>
            </div>
        </nav>
    </>)
}
export default Nav;
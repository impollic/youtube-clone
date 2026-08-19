function VideoComp ({img, duracao, titulo, autor, views})
{
    return <div className="Video-Recomendado">
        <div className="image-holder">
            <img src={img} alt="algo" className="videocomp-img"/>
            <p>{duracao}</p>
        </div>
        <div className="info-holder">
            <p id="video-titulo">{titulo}</p>
            <p className="video-outros">{autor}</p>
            <p className="video-outros">{views} Views</p>
        </div>
        <div className="dots"></div>
    </div>
}
export default VideoComp;
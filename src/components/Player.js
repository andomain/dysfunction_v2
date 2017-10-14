import React from 'react'

const Player = (props) => {
    const url = `//html5-player.libsyn.com/embed/episode/id/${props.id}/height/${props.height}/width/${props.width}/theme/custom/autonext/no/thumbnail/yes/autoplay/no/preload/no/no_addthis/no/direction/backward/render-playlist/no/custom-color/${props.color}/`

    return (
    <iframe
        className="episode"
        src={url}
        height={props.height}
        width={props.width}
        scrolling="no"
        allowFullScreen=""></iframe>
    );
};

export default Player;
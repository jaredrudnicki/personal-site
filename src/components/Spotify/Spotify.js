import Draggable from "react-draggable";
import {useState} from "react";


function Spotify({open, setOpen}) {

    const [position, setPosition] = useState({x: 190, y: -630})

    const handleDrag = (e, ui) => {
        const {x, y} = position;
        setPosition({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        });
    };
    

    const showSpotify = () => {
        if(open) {
            return (
                <Draggable bounds="body" handle="strong" onDrag={handleDrag} defaultPosition={position}>
                    <div style={{width:"500px", border: "1px solid black"}}className="box no-cursor">
                        <strong className="cursor">
                            <div className="container">
                                <div className="row" style={{backgroundColor: "gray"}}>
                                    <div className="col">
                                        spotify
                                    </div>
                                    <div className="col-1 align-self-end">
                                        <button 
                                            onClick ={() => setOpen(false)}
                                            className="button-close">x
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </strong>
                        <div>
                        <iframe 
                            title="spotify"
                            src="https://open.spotify.com/embed/playlist/5yMJdTJ0c8vOFPAyJpQpdq?utm_source=generator&theme=0" 
                            width="100%" 
                            height="380" 
                            frameBorder="0" 
                            allowfullscreen="" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">    
                        </iframe>
                        </div>
                    </div>
                </Draggable>
            )
        }
    }

    return (
        <div>
            {showSpotify()}
        </div>
    )


}
export default Spotify;


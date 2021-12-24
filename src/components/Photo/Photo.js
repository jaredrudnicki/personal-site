import Draggable from "react-draggable";
import {useState} from "react";
import "./Photo.css"

function Photo({open, setOpen}) {
    
    const [position, setPosition] = useState({x: 190, y: -630})

    const handleDrag = (e, ui) => {
        const {x, y} = position;
        setPosition({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        });
    };
    

    const showPhoto = () => {
        if(open) {
            return (
                <Draggable bounds="body" handle="strong" onDrag={handleDrag} defaultPosition={position}>
                    <div style={{width:"350px", border: "1px solid black"}}className="box no-cursor">
                        <strong className="cursor">
                            <div className="container">
                                <div className="row" style={{backgroundColor: "gray"}}>
                                    <div className="col">
                                        profile.png
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
                            {/* IMAGE GOES HERE */}
                            <img src="profile1.jpg" alt="profile-img" id="profile-photo"/>
                        </div>
                    </div>
                </Draggable>
            )
        }
    }

    return (
        <div>
            {showPhoto()}
        </div>
    )


}
export default Photo;
import Draggable from "react-draggable";
import {useState} from "react";
import "./About.css"

const MESSAGE = `Hello! My name is Jared Rudnicki, 
I am a student studying Computer Science at Northeastern 
University in Boston. I am originally from Atlanta, GA.

Welcome to my desktop! Feel free to edit this file, 
view some of my favorite songs, visit my socials, 
see a recent photo of myself, checkout some other projects 
I have worked on, and send me an email.

Some of my hobbies include: biking, squash, and cooking`

function About({open, setOpen}) {
    
    const [aboutMessage, setAboutMessage] = useState(MESSAGE);
    const [position, setPosition] = useState({x: 190, y: -630})

    const handleDrag = (e, ui) => {
        const {x, y} = position;
        setPosition({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        });
    };
    

    const showAbout = () => {
        if(open) {
            return (
                <Draggable bounds="body" handle="strong" onDrag={handleDrag} defaultPosition={position}>
                    <div style={{width:"500px", border: "1px solid black", backgroundColor:"white"}} className="box no-cursor">
                        <strong className="cursor">
                            <div className="container">
                                <div className="row" style={{backgroundColor: "gray"}}>
                                    <div className="col">
                                        about.txt
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
                            <textarea cols="10" rows="15" style={{width:"100%", height:"100%"}} onChange={(e) => setAboutMessage(e.target.value)} value={aboutMessage}>
                                {aboutMessage}   
                            </textarea>
                        </div>
                    </div>
                </Draggable>
            )
        }
    }

    return (
        <div>
            {showAbout()}
        </div>
    )


}
export default About;
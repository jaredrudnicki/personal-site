import {useState} from "react";
import Draggable from "react-draggable";

function Resume({open, setOpen}) {
    
    
    const [position, setPosition] = useState({x: 190, y: -630})

    const handleDrag = (e, ui) => {
        const {x, y} = position;
        setPosition({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        });
    };
    

    const showResume = () => {
        if(open) {
            return (
                <Draggable bounds="body" handle="strong" onDrag={handleDrag} defaultPosition={position}>
                    <div style={{width:"500px", border: "1px solid black", backgroundColor:"white"}} className="box cursor">
                        <strong className="cursor">
                            <div className="container">
                                <div className="row" style={{backgroundColor: "gray"}}>
                                    <div className="col">
                                        resume.pdf
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
                            <div className='container'>
                                <embed src="CV_JaredRudnicki.pdf" width="100%" height="600px"/>
                            </div>
                        </div>
                    </div>
                </Draggable>
            )
        }
    }

    return (
        <div>
            {showResume()}
        </div>
    )


}
export default Resume;
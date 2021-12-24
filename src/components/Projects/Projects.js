import Draggable from "react-draggable";
import {useState} from "react";
import "./Projects.css"

const GIFTPICKER = `
Collaborated in a startup environment, where I worked on several features for a gift selection tool:
    > algorithm designating weights to gift suggestions 
    > entire gift results page design
    > logic for previous/next buttons
Tools: typescript, react, tailwind, git, and figma`

const JRIVIA = `
Teamed up to make a social trivia web app for a school project.
    > built api to store users and trivia questions
    > helped with frontend and conditional rendering for each user type
Tools: javascript, react, node, express, bootstrap, and git`

const GROCERY = `
Built an incomplete and simple grocery list app that sorts based on store sections.
Used this project as an introduction to React, APIs and working with JSON data.
Tools: react, bootstrap`

const REVISION = `
Created a static website for friends landscaping business, attempted to give a clean and
simple look as opposed to their then current outdated website.
Tools: html, css, bootstrap`

function Project({open, setOpen}) {
    
    const [position, setPosition] = useState({x: 192, y: -630})

    const handleDrag = (e, ui) => {
        const {x, y} = position;
        setPosition({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        });
    };
    

    const showProject = () => {
        if(open) {
            return (
                <Draggable bounds="body" handle="strong" onDrag={handleDrag} defaultPosition={position}>
                    <div style={{width:"800px", border: "1px solid black", backgroundColor: "white"}}className="box no-cursor">
                        <strong className="cursor">
                            <div className="container">
                                <div className="row" style={{backgroundColor: "gray"}}>
                                    <div className="col">
                                        projects.txt (read-only)
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

                            <div className="row" id="project-row">
                                <div className="col-8">
                                    <a href="https://giftpicker.io/">giftpicker</a>
                                    <p id="gift-picker-desc" style={{fontSize: "14px", whiteSpace: "pre-wrap"}}>
                                        {GIFTPICKER}
                                    </p>
                                </div>
                                <div className="col-4">
                                    <img id="project-image" src="giftpicker.PNG" width="100%"/>
                                </div>
                            </div>

                            <hr />
                            <div className="row" id="project-row">
                                <div className="col-8">
                                    <a href="http://jrivia.herokuapp.com/">jrivia</a>
                                    <p id="gift-picker-desc" style={{fontSize: "14px", whiteSpace: "pre-wrap"}}>
                                        {JRIVIA}
                                    </p>
                                </div>
                                <div className="col-4">
                                    <img id="project-image" src="jrivia.PNG" width="100%"/>
                                </div>
                            </div>

                            <hr />
                            <div className="row" id="project-row">
                                <div className="col-8">
                                    <a href="https://infallible-perlman-9ba6cf.netlify.app/">Grocery List App</a>
                                    <p id="gift-picker-desc" style={{fontSize: "14px", whiteSpace: "pre-wrap"}}>
                                        {GROCERY}
                                    </p>
                                </div>
                                <div className="col-4">
                                    <img id="project-image" src="grocery.PNG" width="100%"/>
                                </div>
                            </div>

                            <hr />
                            <div className="row" id="project-row">
                                <div className="col-8">
                                    <a href="https://hopeful-rosalind-6362f4.netlify.app/">Revision Landscaping</a>
                                    <p id="gift-picker-desc" style={{fontSize: "14px", whiteSpace: "pre-wrap"}}>
                                        {REVISION}
                                    </p>
                                </div>
                                <div className="col-4">
                                    <img id="project-image" src="revisionlandscaping.PNG" width="100%"/>
                                </div>
                            </div>

                            <hr />
                            <div className="row" id="project-row">
                                <p style={{fontSize: "14px"}}>
                                    Checkout my resume and github for other projects that are not hosted on the web.
                                </p>
                            </div>
                            
                                   
                            
                        </div>
                    </div>
                </Draggable>
            )
        }
    }

    return (
        <div>
            {showProject()}
        </div>
    )


}
export default Project;
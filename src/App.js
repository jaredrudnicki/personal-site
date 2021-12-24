import './App.css';
import Draggable from 'react-draggable';
import {useState} from "react";

import About from './components/About/About';
import Spotify from './components/Spotify/Spotify';
import Bar from './components/Bar/Bar';
import './vendors/bootstrap/css/bootstrap.min.css';
/*import './vendors/bootstrap/bootstrap.min.css'; */
import './vendors/fontawesome/css/all.min.css';
import Resume from './components/Resume/Resume';
import Photo from './components/Photo/Photo';
import Project from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


function App() {


  const [aboutOpen, setAboutOpen] = useState(true);
  const [spotifyOpen, setSpotifyOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const [position, setPosition] = useState({x: 0, y: 0});

  const handleDrag = (e, ui) => {
    const {x, y} = position;
    setPosition({
        x: x + ui.deltaX,
        y: y + ui.deltaY,
    });
  };

  const setOpen = ((event) => {
    setAboutOpen(false);
    setSpotifyOpen(false);
    setResumeOpen(false);
    setProfileOpen(false);
    setProjectOpen(false);
    setContactOpen(false);

    if(event.target.value === "about") {
      setAboutOpen(true);
    } else if(event.target.value === "spotify") {
      setSpotifyOpen(true);
    } else if(event.target.value === "resume") {
      setResumeOpen(true);
    } else if(event.target.value === "profile") {
      setProfileOpen(true);
    } else if(event.target.value === "projects") {
      setProjectOpen(true);
    } else if(event.target.value === "contact") {
      setContactOpen(true);
    }
    console.log(event.target.value)
  })


  return (
    <div className="App">

        {/* TOP ROW OF DESKTOP */}
        <Bar />
        <br />
        <div className="desktop-icon-container">
        <Draggable grid={[100, 100]} onDrag={handleDrag}>
            <div style={{width: "50px"}}>
              <div className="desktop_icon">
                <label for="about">
                <i class="fas fa-file fa-2x"></i>
                <p> about.txt </p>
                </label>
              </div>
              <input id="about" name="app" type="radio" onClick={setOpen} value="about" style={{display: "none"}}/>
            </div>
          </Draggable>

          <Draggable grid={[100, 100]} onDrag={handleDrag}>
            <div style={{width: "50px"}}>
              <div className="desktop_icon">
                <label for="spotify">
                <i class="fab fa-spotify fa-2x"></i>
                <p> Spotify </p>
                </label>
              </div>
              <input id="spotify" name="app" type="radio" onClick={setOpen} value="spotify" style={{display: "none"}}/>
            </div>
          </Draggable>

          <Draggable grid={[100, 100]} onDrag={handleDrag}>
            <div style={{width: "50px"}}>
              <div className="desktop_icon">
                <label for="resume">
                <i class="fas fa-file-pdf fa-2x"></i>
                <p> resume.pdf </p>
                </label>
              </div>
              <input id="resume" name="app" type="radio" onClick={setOpen} value="resume" style={{display: "none"}}/>
            </div>
          </Draggable>

          <Draggable grid={[100, 100]} onDrag={handleDrag}>
            <div style={{width: "50px"}}>
              <div className="desktop_icon">
                <label for="profile">
                <i class="fas fa-file-image fa-2x"></i>
                <p> profile-img.png </p>
                </label>
              </div>
              <input id="profile" name="app" type="radio" onClick={setOpen} value="profile" style={{display: "none"}}/>
            </div>
          </Draggable>

          <Draggable grid={[100, 100]} onDrag={handleDrag}>
            <div style={{width: "50px"}}>
              <div className="desktop_icon">
                <label for="projects">
                <i class="fas fa-file-image fa-2x"></i>
                <p> projects.txt </p>
                </label>
              </div>
              <input id="projects" name="app" type="radio" onClick={setOpen} value="projects" style={{display: "none"}}/>
            </div>
          </Draggable>
          
          <Draggable grid={[100, 100]} onDrag={handleDrag}>
            <div style={{width: "50px"}}>
              <div className="desktop_icon">
                <label for="contact">
                <i class="fas fa-envelope fa-2x"></i>
                <p> Mail </p>
                </label>
              </div>
              <input id="contact" name="app" type="radio" onClick={setOpen} value="contact" style={{display: "none"}}/>
            </div>
          </Draggable>

        </div>
        

        {/*<a id="spotify" href="https://open.spotify.com/user/jrudder3901">*/}
        <About open={aboutOpen} setOpen={setAboutOpen}/>
        <Spotify open={spotifyOpen} setOpen={setSpotifyOpen} />
        <Resume open={resumeOpen} setOpen={setResumeOpen} />
        <Photo open={profileOpen} setOpen={setProfileOpen} />
        <Project open={projectOpen} setOpen={setProjectOpen} />
        <Contact open={contactOpen} setOpen={setContactOpen}/>
      
    </div>
  );
}

export default App;
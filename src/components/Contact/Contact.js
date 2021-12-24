import React, { useState } from 'react';
import Draggable from 'react-draggable';
import emailjs from 'emailjs-com';
import "./Contact.css";

export const Contact = ({open, setOpen}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [position, setPosition] = useState({x: 190, y: -630})

  const handleDrag = (e, ui) => {
      const {x, y} = position;
      setPosition({
          x: x + ui.deltaX,
          y: y + ui.deltaY,
      });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send("service_a1l6v6y","template_jcpkbbk", {
        to_name: "Jared",
        from_name: name,
        message: message,
        reply_to: email,
        },"user_AsbWpNKG4ydga8NJaC7Pe")
        .then((result) => {
            setSuccess(result.text);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  };

    const showContact = () => {
        if(open) {
            return (
                <Draggable bounds="body" handle="strong" onDrag={handleDrag} defaultPosition={position}>
                    <div style={{width:"400px", border: "1px solid black", backgroundColor:"white"}} className="box no-cursor">
                        <strong className="cursor">
                            <div className="container">
                                <div className="row" style={{backgroundColor: "gray"}}>
                                    <div className="col">
                                        Mail
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
                            <div id="form-container">
                                <form onSubmit={sendEmail}>
                                    <div>
                                        <label>{` > Name`}</label> <br/>
                                        <input  required type="text" name="user_name" id="name-input" placeholder='Jane Doe' value={name} onChange={(event) => setName(event.target.value)}/>
                                    </div>
                                    <div>
                                        <label>{`> Email`}</label> <br/>
                                        <input required type="email" name="user_email" id="email-input" placeholder='jane.doe@example.com' value={email} onChange={(event) => setEmail(event.target.value)}/>
                                    </div>
                                    <div>
                                        <label>{`> Message`}</label> <br/>
                                        <textarea required rows="8"  name="message" id="message-input" placeholder="Hi Jared. I'm really interested in learning more about you!" value={message} onChange={(event) => setMessage(event.target.value)}/>
                                    </div>

                                    <div className="row" style={{float: "right"}}>
                                        <div className="col">{success}</div>
                                        <div className="col">
                                            <button type="submit" id="submit-button">
                                                {`Send `}
                                                <i class="fas fa-paper-plane"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <br />
                                </form>
                            </div>
                        </div>
                    </div>
                </Draggable>
            );
        }
    }

    return (
        <div>
            {showContact()}
        </div>
    )



};

export default Contact;
import "./Bar.css"


function Bar() {
    

    function formatAMPM() {
        const date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }


    return (
        <div className="cpu_details">
          <div className="row">
            <div className="col-8" id="title">
              {`>> Jared's Desktop`}
            </div>
            
            <div className="col-4">

              <div id="time" style={{fontSize: "18px"}}>{formatAMPM()}</div>
              
              <a id="linkedin-link" href="https://www.linkedin.com/in/jared-rudnicki/">
                <i class="fab fa-linkedin fa-2x"></i>
              </a>

              <a id="github-link" href="https://github.com/jaredrudnicki">
                <i class="fab fa-github-square fa-2x"></i>
              </a>

              
            </div>
          </div>
        </div>
    )
}

export default Bar;
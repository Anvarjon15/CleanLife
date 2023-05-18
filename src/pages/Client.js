import React from "react";
import "./Home.css";
import Quote from "../logos/quote.png"
import ClientPic from "../logos/clientpic.png"

function ClientComment() {
    return(
        <div className="client__comment">
          <img src={Quote} width="30px" height="30px"/>
          <p className="clt_C">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised 
            words which don't look even slightly believable.
          </p>
          <div className="clt_p">
            <div>

          <img src={ClientPic} width="40px" height="40px" />
            </div>
          
          <div className="clt_t">
          <h4 className="client_n">LUCY MERY</h4>
          <h6 className="client_j">Teacher</h6>
          </div>
          </div>
         
      </div>
    )
}

export default ClientComment

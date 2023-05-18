import React ,{useState} from 'react'


function Read() {
    const [show , setShow] = useState(true)
  return (
    <div>
        {show &&  <p style={{color:'green'}}>
         :) General cleaning ! <br/>
         :) Cleaning after renovation ! <br/>
         :) Eco general cleaning ! <br/>
         :) Eco cleaning after renovation !<br/>
         :) Cleaning before and after the event ! <br/> 
        </p> }
        <h5 onClick={()=>setShow(!show)} style={{fontFamily:'Gilroy'}}>
        {show === true ? 'HIDE': 'READ MORE ...'}</h5>
    </div>
  )
}

export default Read
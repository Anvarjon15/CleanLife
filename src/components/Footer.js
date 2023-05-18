import React from 'react'
import House from '../logos/house.png'
import Facebook from '../logos/facebook.svg'
import Instagram from '../logos/instagram.svg'
import Watsap from '../logos/whatsapp.svg'
import Youtube from '../logos/youtube.svg'
import Telegram from '../logos/telegram.svg'
// import Phone from '../logos/phone.svg'
import './Footer.css'


function Footer() {
  return (
    <div>
        <div className='container'>
            <div className='internet_icon'>
            <div className='house_icc'>
               <img src={House}/>
            </div> 
            <div className='int_icon'>
            <img  src={Facebook} height="30px" width="30px" />
            <img  onClick={{}} src={Instagram}height="30px" width="30px" />
            <img  src={Watsap}   height="30px" width="30px" />
            <img  src={Youtube}  height="30px" width="30px" />
            <img  src={Telegram} height="30px" width="30px" />
            </div>
            </div>
            <br/>
            <hr/>



            <div className='main'>
                <div className='about_s'>
                <h1>ABOUT US</h1>
                <p>
                 Our mother started Clean Life 15 years ago,
                 guided by two principles: to provide the 
                 highest possible quality of service and the highest quality of customer service,
                 we are still guided by her vision.
                </p>
                </div>
                <div className='bestservice'>
                   <h1>BEST SERVICES</h1>
                   <p>House Cleaning</p>
                   <p>Office Cleaning</p>
                   <p>Carpet Cleaning</p>
                   <p>Glass Cleaning</p>
                   <p>Kitchen Cleaning</p>
                </div> 
                <div className='contactt'>
                <h1>CONTACT</h1>
                 <p>Tashkent city, Chilanzar district,<br/>
                     6 quarter, "Eldorado"
                  </p>
                  <p>
                    {/* <img src={Phone} width='15px' height='15px'> */}
                    +998932701524  <br/>
                    +998933702104
                  {/* </img> */}
                  </p>
                  <p>
                  info@cleanlife.uz
                  </p>

                </div>
                <div className='news'>
                <h1>NEWS</h1>
                <p>Subscribe to all news from us. <br/>
                    Please enter your email address <br/>in the form below
                </p>               
                </div>
            </div>
            <br/>
            <hr/>
            <div className='copyright'>
                <p>Copyright @ AnvarjoN.uz | 2023</p>
            </div>
            <hr/>
        </div>
    </div>
  )
}

export default Footer





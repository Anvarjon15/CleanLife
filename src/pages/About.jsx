import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AboutUS from '../assets/AboutUS.png'
import Team from '../logos/people.svg'
import Prize from '../logos/laptop.svg'
import Like from '../logos/heart.svg'
import Check from '../logos/check .svg'
import './About.css'


 
function About() {
  return (
    <div>
      <Navbar/>     
        <div className='about_page'>
           <img src={AboutUS}/>
           <h1>ABOUT US</h1>
        </div>
        <div className='about_container'>
          <img src={Team} width="60px" height="60px"/>
          <h1>EXPERIENCED STAFF</h1>
          <p>With the help of the CleanLife platform, we have helped clean 
            millions of houses and apartments in Uzbekistan.</p>
        </div>
        <div className='about_container'>
          <img src={Prize} width="60px" height="60px"/>
          <h1>PACKAGE AVAILABLE</h1>
          <p>We provide professional and affordable home cleaning services in Uzbekistan. We charge a flat fee for excellent cleaning.</p>
        </div>
        <div className='about_container'>
          <img src={Like} width="60px" height="60px"/>
          <h1>100% ENJOYMENT</h1>
          <p>Clean Life prides itself on offering you peace of mind with a 100% customer satisfaction guarantee with our professional cleaning services.</p>
        </div>
        <div className='company'>
          <h3>COMPANY</h3>
          <h1>The New Generation Of Cleaning And
              Restoration Concepts.
          </h1>
          <p>
          Whether you want to schedule a one-time cleaning of your home, a weekly visit, or even need an emergency call or need a commercial cleaning, our team in Edinburgh is ready to serve your needs. With a wide range of clients, including rental agents as well as homeowners, our cleaners are known for their flexibility and reliability. Our mission is not only to meet your expectations, but to exceed them, we also offer many other services, such as condominium and apartment cleaning. Our unique 22-step CleanLife cleaning system will give you a healthy and thorough cleaning every time you visit. We will fight mold and mildew. Let's remove the dust. Remove hair and pet hair. We use cleaning products that are environmentally friendly, 
          including the natural home and your own.
          </p>
          <div className='check'>
            <div className='check_t'>
              <img src={Check} width="20px" height="20px" />
            <p>Regular weekly, bi-weekly, four-week house cleaning.</p>
            </div>
            <div className='check_t'>
            <img src={Check} width="20px" height="20px" />
             <p>Flexibility to meet cleaning requirements in a short amount of time.</p>
            </div>
            <div className='check_t'>
            <img src={Check} width="20px" height="20px" />
             <p>Fully trained, uniformed and hired cleaners.</p>
            </div>
            <div className='check_t'>
            <img src={Check} width="20px" height="20px" />
             <p>Supervision of the team at home ensures the quality of service.</p>
            </div>
            <div className='check_t'>
            <img src={Check} width="20px" height="20px" />
             <p>Collection and return of property keys to the owner/agent.</p>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About
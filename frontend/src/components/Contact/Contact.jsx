import React , { useState } from 'react'

//css
import './Contact.css'
//icons
import discord from '../../assets/discord.png'
import telegram from '../../assets/telegram.png'

export const Contact = () => {
 
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category , value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Message Sent Successfully!'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };


  return (
    <div className='contact' id='contact'>
        <h1 className="pre--title">Contact</h1>
         <p className="title">Get In Touch</p>
         <div className='container'>

          <div className='contact--left'>
          <h2>You Can Reach Me Via</h2>
         
          <div className='contact--media'>
          <div className='contact--item'>
           <img src={discord} alt="" />
           </div>

           <div className='contact--item'>
           <a href="https://t.me/FirasM74" target='blank'><img src={telegram} alt="" /></a>
           </div>
          </div>

          
          </div>
          <div className='contact--right'>
          <h2>Or By Sending A Message</h2>
            <form onSubmit={handleSubmit}>
                <label>Your Name</label>
                <input className='name' type='text' required value={formDetails.name} onChange={(e) => onFormUpdate('name', e.target.value)}></input>

                <label>Your Email</label>
                <input className='email' type='email' required value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)}></input>

                <label>Your Message</label>
                <textarea className='message'  required value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea> 

                <button type='submit'>{buttonText}</button>
                {
                  status.message && 
                  <div>
                    <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                  </div>
                }
            </form>
           </div>
         </div>
    </div>
  )
}

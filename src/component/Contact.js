import axios from 'axios';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [desc,setDesc] = useState();
  const [mob,setMob] = useState();

  function HandleSubmit(e){
      e. preventDefault()
       const data = {
        Name:name,
        Email:email,
        Desc:desc,
        Mobile:mob
       }
       
       axios.post('https://sheet.best/api/sheets/d699cc02-1b5a-4079-af56-77498040c993',data).then((res)=>{
        console.log(res);
        setName('');
        setEmail('');
        setDesc('');
        setMob('');
       })
       toast.success('successfully Sent',{autoClose:3000},{position: toast.POSITION.BOTTOM_CENTER})
  }

  return ( 
    <div className="container-fluid tw-bg-blue-950 tw-w-screen" id='Contact' >
      <div className="container-sm">
        <div className='row'>
          <h6 className='text-center mt-5 tw-text-gray-400'>Get In Touch</h6>
          <h3 className='tw-text-blue-600 text-center'>Contact Me</h3>
          <br />
          <br />
          <br />
          <br />
          <br />
          <motion.div className="offset-sm-2 col-sm-3 tw-p-2 tw-pb-16" initial={{y:100,opacity:-4}} whileInView={{y:0 , opacity:1}} transition={{ease:"easeIn", duration:0.6}}>
            <div className='tw-bg-blue-900 tw-flex tw-flex-col tw-justify-center tw-p-3 tw-rounded-xl'>
            <i class="fa-solid fa-envelope text-center tw-text-2xl text-white"></i>
            <br />
            <h5 className='text-center text-white'>Email</h5>
            <h6 className='text-center text-white tw-overflow-hidden'>imranraza2016a@gmail.com</h6>
            
             <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#compose" target='_blank' className=' tw-no-underline'><h6 className='tw-p-2 text-center tw-text-blue-950 tw-text-lg  hover:tw-text-slate-400 tw-cursor-pointer tw-rounded-md tw-opacity-[1]'>Send message</h6></a> 
            </div>
            <div className='tw-bg-blue-900 tw-flex tw-flex-col tw-justify-center tw-p-3 tw-rounded-xl mt-4'>
            <i class="fa-brands fa-linkedin text-center tw-text-2xl text-white"></i>
            <br />
            <h5 className='text-center text-white'>Linkedin</h5>
            <h6 className='text-center text-white'>imran raza</h6>
          
            <a href="https://www.linkedin.com/messaging/" target='_blank' className=' tw-no-underline'><h6 className='tw-p-2 text-center tw-text-blue-950 tw-text-lg  hover:tw-text-slate-400 tw-cursor-pointer tw-rounded-md tw-opacity-[1]'>Send message</h6></a> 
            </div>

            <div className='tw-bg-blue-900 tw-flex tw-flex-col tw-justify-center tw-p-3 tw-rounded-xl mt-4'>
            
            <i class="fa-brands fa-whatsapp text-center tw-text-2xl text-white"></i>
            <br />
            <h5 className='text-center text-white'>Imran Raza</h5>
            <h6 className='text-center text-white'>6200966346</h6>
         
           <a href="https://web.whatsapp.com/" target='_blank' className=' tw-no-underline'> <h6 className='tw-p-2 text-center tw-text-blue-950 tw-text-lg  hover:tw-text-slate-400 tw-cursor-pointer tw-rounded-md tw-opacity-[1]'>Send message</h6></a> 
            </div>
            
          </motion.div>
          <div className="offset-sm-1 col-sm-6">
           
              <motion.form  onSubmit={HandleSubmit} className='tw-flex tw-flex-col tw-gap-7 tw-mt-20' initial={{y:100,opacity:-4}} whileInView={{y:0 , opacity:1}} transition={{ease:"easeIn", duration:0.6}}>
              <input type="text" placeholder='Your full name' value={name} onChange={(e)=>{
                setName(e.target.value);
              }} className='tw-p-4 tw-rounded-lg tw-border tw-border-blue-600 tw-bg-blue-950 tw-text-gray-200'/>
              
              <input type="email" placeholder='Your  email' value={email} onChange={(e)=>{
                setEmail(e.target.value);
              }} className='tw-p-4 tw-rounded-lg tw-border tw-border-blue-600 tw-bg-blue-950 tw-text-gray-200'/>

               <input type="tel" placeholder='Your number' value={mob} onChange={(e)=>{
                setMob(e.target.value);
              }} className='tw-p-4 tw-rounded-lg tw-border tw-border-blue-600 tw-bg-blue-950 tw-text-gray-200'/>
              
              <textarea name="" id="" cols="50" rows="5" value={desc} onChange={(e)=>{
                setDesc(e.target.value)
              }} className='tw-p-4 tw-rounded-lg tw-border tw-border-blue-600 tw-bg-blue-950 tw-text-gray-200'></textarea>
              
              <motion.button type='submit' className=' tw-w-32 tw-px-2 tw-py-2 tw-border tw-border-blue-600 tw-rounded-lg tw-bg-blue-600' initial={{y:-50,opacity:0}} whileInView={{y:0 , opacity:1}} transition={{ease:"easeIn", delay:0.3}}>send Message</motion.button>
                 <ToastContainer/>
              </motion.form>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
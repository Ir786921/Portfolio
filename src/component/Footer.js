import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid tw-bg-blue-900'>
        <div className="container-sm">
            <div className="row-sm">
                <div className="col-sm-12">
                  
                  <div className='d-flex tw-justify-evenly tw-w-full tw-text-gray-400 tw-px-12 tw-gap-5 tw-py-6'>
                   <a href="#Home" className=' tw-no-underline tw-text-gray-400 tw-text-xl hover:tw-text-white'>Home</a> 
                   <a href="#About" className=' tw-no-underline tw-text-gray-400 tw-text-xl hover:tw-text-white'>About</a> 

                   <a href="#Internship" className=' tw-no-underline tw-text-gray-400 tw-text-xl hover:tw-text-white'>Skill</a> 
                   <a href="#Projects" className=' tw-no-underline tw-text-gray-400 tw-text-xl hover:tw-text-white'>Projects</a> 

                   <a href="#Contact" className=' tw-no-underline tw-text-gray-400 tw-text-xl hover:tw-text-white'>Contact</a> 

                   

                   
                  </div>
                  <br />
                  <div className=' tw-flex tw-justify-center tw-gap-10 pb-4'>
                  <a href="" target='blank' className=' tw-no-underline tw-text-gray-400 tw-text-4xl hover:tw-text-white'><i class="fa-brands fa-instagram tw-text-4xl tw-text-white"></i>
</a>
                   <a href="" target='blank' className=' tw-no-underline tw-text-gray-400 tw-text-4xl hover:tw-text-white'>                  <i class="fa-brands fa-linkedin tw-text-4xl tw-text-white"></i>
</a> 
                   <a href="https://github.com/Ir786921" target='blank' className=' tw-no-underline tw-text-gray-400 tw-text-3xl hover:tw-text-white'>                  <i class="fa-brands fa-github tw-text-4xl tw-text-white"></i>
</a> 





                  </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
import React from "react";
import image1 from "../assests/tailwind.png";



const Home = () => {
  return (
    <div className="container-fluid tw-bg-blue-950">
    <div className="container">
      <div className="row">
        <div className="offset-2 col-8 offset-2">
          {" "}
          <div className="tw-border tw-border-red-300 mt-5">
            <div className="">
              <h1 className="tw-text-xl tw-text-slate-300">hola amingos <h2 className="tw-inline-block">🙋‍♂️</h2></h1>
              <h1 className="tw-text-slate-300">
                Hii , I'm <span className=" tw-text-red-500 ">Imran Raza</span>
              </h1>
              <h1 className=" tw-text-xl tw-text-slate-300">
                a frontend developer
              </h1>
              <br />
              
            <p className="tw-font-light tw-text-2xl tw-text-slate-300 tw-overflow-visible tw-no-underline tw-slate-">
                A Sharp mind and creative front-end developer having a keen eye
                on design technologies, creating great user-friendly and
                responsive web designs and layouts. I also have a strong grip on
                the front-end fundamentals of CSS, JavaScript, and HTML ,react
                and GitHub.Successfully completed many projects from scratch
              </p>
              <br />
              <div className="row">
                <div className="col-5 mt-2">
                  {" "}
                  <h1 className="tw-text-xl tw-mb-6 tw-text-slate-300">Find me on</h1>
                  <div className="row">
                    <div className=" tw-bg-blue-900 tw-rounded-lg tw-p-4 offset-1 col-3 tw-outline tw-outline-gray-900 hover:tw-outline-gray-500 tw-flex tw-justify-center tw-items-center">
                    <a href="https://github.com/Ir786921" target="blank"><i class="fa-brands fa-github tw-text-md sm:tw-text-3xl tw-text-center tw-m-auto tw-cursor-pointer tw-text-slate-400"></i></a>  
                    </div>
                    <div className=" tw-bg-blue-900 tw-rounded-lg tw-p-4 offset-1 col-3 tw-outline tw-outline-gray-900 hover:tw-outline-gray-500 tw-flex tw-justify-center tw-items-center">
                      <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#compose" target="blank"><i class="fa-solid fa-envelope tw-text-md sm:tw-text-3xl tw-text-center tw-m-auto tw-cursor-pointer tw-text-slate-400"></i></a>
                    </div>
                    <div className=" tw-bg-blue-900 tw-rounded-lg tw-p-4 offset-1 col-3 tw-outline tw-outline-gray-900 hover:tw-outline-gray-500 tw-flex tw-justify-center tw-items-center">
                     <a href="https://www.linkedin.com/in/imran-raza-786mn/" target="blank"><i class="fa-brands fa-linkedin tw-text-md sm:tw-text-3xl tw-text-center tw-cursor-pointer tw-text-slate-400"></i></a> 
                    </div>
                  </div>
                </div>
                <div className="offset-1 col-6 mt-2">
                  <h1 className="tw-text-xl tw-mb-6 tw-text-slate-300">tech-stacks used </h1>
                  <div className="row">
                   
                    <div className=" tw-bg-blue-900 tw-rounded-lg tw-p-4 offset-1 col-2  tw-outline tw-outline-gray-900 hover:tw-outline-gray-500 tw-flex tw-justify-center tw-items-center">
                      <a href="https://www.w3schools.com/html/html_intro.asp"><i class="fa-brands fa-html5 tw-text-md sm:tw-text-3xl tw-text-center tw-cursor-pointer tw-text-slate-300"></i></a>{" "}
                      <br />
                    </div>
                    <div className=" tw-bg-blue-900 tw-rounded-lg tw-p-4 offset-1 col-2  tw-outline tw-outline-gray-900 hover:tw-outline-gray-500 tw-flex tw-justify-center tw-items-center">
                     <a href="https://react.dev/blog/2023/03/16/introducing-react-dev"><i class="fa-brands fa-react tw-text-md tw-text-center tw-cursor-pointer tw-text-slate-300 sm:tw-text-3xl"></i></a> {" "}
                      <br />
                    </div>
                    <div className=" tw-bg-blue-900 tw-rounded-lg tw-p-4 offset-1 col-2  tw-outline tw-outline-gray-900 hover:tw-outline-gray-500 tw-flex tw-justify-center tw-items-center">
                      <a href="https://www.w3schools.com/js/default.asp"><i class="fa-brands fa-js tw-text-md tw-text-center tw-m-auto tw-cursor-pointer tw-text-slate-300 sm:tw-text-3xl"></i></a>{" "}
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-12 tw-p-2 tw-rounded-md d-flex justify-content-start mt-3">
                  <a href="https://www.linkedin.com/in/imran-raza-786mn/" target="blank" className="tw-no-underline tw-p-3 tw-rounded-md tw-bg-blue-900 tw-border tw-border-blue-900 hover:tw-border-blue-200 tw-text-slate-300">Hire Me</a>
                </div>
                <div className="col-12 tw-p-2 mt-5">
                  {" "}
                  <a href="https://www.canva.com/design/DAFN3WYlf-8/LqOlUXs5xoHTIV3TETD9QQ/view?utm_content=DAFN3WYlf-8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" download={true} className=" tw-no-underline tw-p-3 tw-rounded-md tw-bg-blue-900 tw-border tw-border-blue-600 tw-text-slate-300 hover:tw-border-blue-200">Download Resume</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      </div>
    </div>
  
  );
};

export default Home;

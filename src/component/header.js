import React from "react";


const NavBar = () => {
  return (
    <>


<nav class="navbar navbar-expand-lg tw-bg-blue-950 tw-p-2">
          <a className="navbar-brand ms-5 tw-rounded-lg text-white tw-text-xl tw-p-2" href="#Home">
            Imran Raza
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon tw-text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li class="nav-item active link ms-3 tw-rounded-lg text-white hover:tw-bg-gray-400 tw-text-xl">
                <a to="/home" className="nav-link text-white" href="#Home">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item active ms-3 link tw-rounded-lg text-white hover:tw-bg-gray-400 tw-text-xl">
                <a to="/about" className="nav-link text-white" href="#About">
                  About<span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item active ms-3 link tw-rounded-lg text-white hover:tw-bg-gray-400 tw-text-xl">
                <a to="/internship" className="nav-link text-white" href="#Internship">
                  Internship <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item active ms-3 link tw-rounded-lg text-white hover:tw-bg-gray-400 tw-text-xl">
                <a to="/service" className="nav-link text-white" href="#Projects">
                  Projects <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item active ms-3 link tw-rounded-lg text-white hover:tw-bg-gray-400 tw-text-xl">
                <a to="/contact" className="nav-link text-white" href="#Contact">
                  Contact <span className="sr-only"></span>
                </a>
              </li>
            </ul>
          </div>
         <div className="d-flex flex-row-reverse mx-5"><a className="tw-w-32 tw-px-3 tw-py-3 tw-border tw-border-blue-600 tw-rounded-lg tw-bg-blue-600 tw-text-slate-300 tw-no-underline hover:tw-text-white tw-items-center tw-flex tw-justify-center tw-text-xl" href="https://mail.google.com/">Email</a></div> &nbsp;&nbsp;&nbsp;&nbsp;
          
          
        </nav>
    </>
  );
};

export default NavBar;

import React from "react";
import { Helmet } from 'react-helmet';
import logo1 from "../../assets/images/img1.png";
import "./CSS/nav.css"


const Nav = () => {
  return (
    <div className="">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Helmet>
      <header className="">
        <div className="">
          {/* <div className="logo">
          <img src={logo1} alt="Logo" className="logo" />
          </div> */}
          {/* <div className="text-xl font-bold">Alumni Association</div>
          <nav className="space-x-4">
            <a href="#features" className="hover:text-blue-400">
              Features
            </a>
            <a href="#success-stories" className="hover:text-blue-400">
              Success Stories
            </a>
            <a href="#events" className="hover:text-blue-400">
              Events
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </nav> */}


          <nav id="navbar">
              <div id="logo">
              <img src={logo1} alt="Logo" className="logo" />
            </div>
            <ul>
              <li class="item"><a href="#">Alumni Association</a></li>
              <li class="item"><a href="#success-stories">Success Stories</a></li>
              <li class="item"><a href="#events">Events</a></li>
              <li class="item"><a href="#Contact">Contact</a></li>
            </ul>

           <div>
           <ul>
            <a href="/login">.

            </a>
              <button
                className="login_button"
              >
                Login
              </button>

              <a href="">
              <button
                className="signup_button"
              >
                Signup
              </button>
              </a>
            </ul>
           </div>

          </nav>

        </div>
      </header>
    </div>
  );
};

export default Nav;

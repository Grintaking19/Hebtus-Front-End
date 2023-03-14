import React from "react";
import "./styles/NavBar.css"
import {CgHeart} from "react-icons/cg"
import { CgMathPlus } from "react-icons/cg";
import {TfiTicket} from "react-icons/tfi"
import {AiOutlineUser} from "react-icons/ai"


export default function NavBar(){

    return(

        <nav className="signed-in-nav-bar">
           <h3 className="hebtus-logo-text">Hebtus</h3>
           
           <div className="nav-bar--button">
            <a>
                <div><CgMathPlus className="nav-bar--button--icon"/></div>
                Create an event
                </a>
           </div>
           
           {/* <div className="nav-bar--button">
            <a>
                <div><CgHeart className="nav-bar--button--icon"/></div>
                Likes
                </a>
           </div> */}

           <div className="nav-bar--button">
            <a>
                <div><TfiTicket className="nav-bar--button--icon"/></div>
                Tickets
                </a>
           </div>

           <div className="nav-bar--user">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <AiOutlineUser className="nav-bar--button--icon "/>
                <div className=" nav-bar--username d-inline-block align-text-top">OmarAlSharif@gmail.com</div>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Manage my events</a></li>
            <li><a class="dropdown-item" href="#">Tickets</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>

           </div>
           
          
           
        </nav>



    )

}
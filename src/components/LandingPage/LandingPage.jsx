import React from "react";
import Events from "./Events";
import NavBar from "./NavBar";
import Categories from "./Categories"

export default function LandingPage(){
    return(

        <div>
        {/* <header> */}
            <NavBar/>
            <Categories/>
        {/* </header> */}
        
        {/* <main> */}
            <Events/>
            {/* </main> */}

        </div>

    )
}
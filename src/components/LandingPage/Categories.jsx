import React from "react";
import "./styles/Categories.css"
import {FiMusic, FiHeart} from "react-icons/fi"
import {FaTheaterMasks} from "react-icons/fa"
import {MdOutlinePhotoLibrary, MdOutlineBusinessCenter} from "react-icons/md"
import {TbDeviceGamepad2, TbShirtSport} from "react-icons/tb"
import {BiDrink} from "react-icons/bi"


export default function Categories(){
    return (




        <div class="album py-5 bg-light">
        {/* <h4 class="">Check out trending categories</h4> */}
        <div class="container">
    
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            <div class="col">
              <div class="card shadow-sm" style={{width: '18rem'}}>
                <div class="card-body">
                    <FiMusic class="category--icon"/>
                    <h5 class="event-card--name d-inline-block align-text-top category--name">Music</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style={{width: '18rem'}}>
                <div class="card-body">
                    <FaTheaterMasks class="category--icon"/>
                    <h5 class="event-card--name d-inline-block align-text-top category--name">Performing & Visual Arts</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style={{width: '18rem'}}>
                <div class="card-body">
                    <MdOutlinePhotoLibrary class="category--icon"/>
                    <h5 class="event-card--name d-inline-block align-text-top category--name">Holiday</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style={{width: '18rem'}}>
                <div class="card-body">
                    <FiHeart class="category--icon"/>
                    <h5 class="event-card--name d-inline-block align-text-top category--name">Health & Fitness</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style={{width: '18rem'}}>
                <div class="card-body">
                    <TbDeviceGamepad2 class="category--icon"/>
                    <h5 class="event-card--name d-inline-block align-text-top category--name">Hobbies</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style={{width: '18rem'}}>
                <div class="card-body">
                    <MdOutlineBusinessCenter class="category--icon"/>
                    <h5 class="event-card--name d-inline-block align-text-top category--name">Business</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style={{width: '18rem'}}>
                <div class="card-body">
                    <BiDrink class="category--icon"/>
                    <h5 class="event-card--name d-inline-block align-text-top category--name">Food & Drink</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm" style={{width: '18rem'}}>
                <div class="card-body">
                    <TbShirtSport class="category--icon"/>
                    <h5 class="event-card--name d-inline-block align-text-top category--name">Sports & Fitness</h5>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>





    )
}
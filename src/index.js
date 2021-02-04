
import { buildNavBar } from "./nav.js";
import { aboutContent } from "./about.js";
import { contactContent } from "./contact.js"
import { homeContent } from "./home.js"
import { menuContent } from "./menu.js"

import './style.css'

import photo from './restaurant2.jpeg';




buildNavBar()
aboutContent()
contactContent()
homeContent()
menuContent()


const navParent = document.getElementById("navId")
navParent.addEventListener("click", openTab)


const element = document.querySelectorAll(".containerStyle")
const home = document.getElementById("containerHomeId")

function openTab(event) {

    if (event.target.id === "homeId") {

          [...element].map(item => {
              if (item.classList.contains("open")) {
                 //item.removeClass("open")
                // home.addClass("open")

                console.log(item)
             }

          })
        
    }
}



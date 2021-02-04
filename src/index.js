
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


const elements = document.querySelectorAll(".containerStyle")
const home = document.getElementById("containerHomeId")
const menu = document.getElementById("containerMenuId")
const about = document.getElementById("containerId")
const contact = document.getElementById("containerContactId")

function openTab(event) {

    if (event.target.id === "homeId") {
         
        addRemoveClass(home)
        
    } else if (event.target.id === "menuId") {
     
       addRemoveClass(menu)

    } else if (event.target.id === "aboutId") {

       addRemoveClass(about)
           
    } else if (event.target.id === "contactId") {

        addRemoveClass(contact)
      
    }

function addRemoveClass(item) {
    elements.forEach(element => {
        element.classList.remove("open")
        item.classList.add("open")
    })
}

}



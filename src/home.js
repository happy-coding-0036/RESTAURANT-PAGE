
import { buildElement  } from "./nav.js";



const homeContent = function() {

   const container = buildElement("div", "containerStyle", null, "containerHomeId")
   container.classList.add("open")
  const heading = buildElement("h1", "info3", "home heading", "homeID")
  const para =  buildElement("p", "info4", "home home home here is a long sentence or paragraph that I don't know how to add or how to remove.", "parahomeID")

  const content = document.getElementById("content")
 const headContent =  container.appendChild(heading)
 const paraContent = container.appendChild(para)

 const attachedCon =  content.appendChild(container)
  attachedCon.appendChild(headContent)
  attachedCon.appendChild(paraContent)


}




export { homeContent }
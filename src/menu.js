
import { buildElement  } from "./nav.js";



const menuContent = function() {

   const container = buildElement("div", "containerStyle", null, "containerMenuId")

  const heading = buildElement("h1", "info3", "menu heading", "menuID")
  const para =  buildElement("p", "info4", "menu menu menu here is a long sentence or paragraph that I don't know how to add or how to remove.", "paraMenuID")

  const content = document.getElementById("content")
 const headContent =  container.appendChild(heading)
 const paraContent = container.appendChild(para)

 const attachedCon =  content.appendChild(container)
  attachedCon.appendChild(headContent)
  attachedCon.appendChild(paraContent)


}




export { menuContent }
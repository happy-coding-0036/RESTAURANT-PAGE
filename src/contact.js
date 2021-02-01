
import { buildElement  } from "./nav.js";



const contactContent = function() {

   const container = buildElement("div", "containerStyle", null, "containerContactId")

  const heading = buildElement("h1", "info3", "Contact page heading", "contactID")
  const para =  buildElement("p", "info4", "contact contact contact  here is a long sentence or paragraph that I don't know how to add or how to remove.", "para2ID")

  const content = document.getElementById("content")
 const headContent =  container.appendChild(heading)
 const paraContent = container.appendChild(para)

 const attachedCon =  content.appendChild(container)
  attachedCon.appendChild(headContent)
  attachedCon.appendChild(paraContent)


}




export { contactContent }
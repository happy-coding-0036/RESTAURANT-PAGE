
import { buildElement  } from "./nav.js";



const aboutContent = function() {

   const container = buildElement("div", "containerStyle", null, "containerId")

  const heading = buildElement("h1", "info3", "this is a heading", "aboutID")
  const para =  buildElement("p", "info4", "About about about here is a long sentence or paragraph that I don't know how to add or how to remove.", "paraID")

  const content = document.getElementById("content")
 const headContent =  container.appendChild(heading)
 const paraContent = container.appendChild(para)

 const attachedCon =  content.appendChild(container)
  attachedCon.appendChild(headContent)
  attachedCon.appendChild(paraContent)


}




export { aboutContent }


const buildElement = function (element, style, content2, idName) {
    
    const newElement = document.createElement(element);
    newElement.textContent = content2
    newElement.id = idName;
    newElement.classList.add(style)

    return newElement
}


const buildNavBar = function() {


    const content = document.getElementById("content")
    const aboutNav = buildElement("div", "navStyle", "about","aboutId")
    const contactNav = buildElement("div", "navStyle", "contact", "contactId")
    const menuNav = buildElement("div", "navStyle", "menu", "menuId")
    const homeNav = buildElement("div", "navStyle", "home", "homeId")

    const navContainer = buildElement("div", "navConStyle", null, "navId")

    const attachedNav = content.appendChild(navContainer)
    
    attachedNav.appendChild(homeNav)
    attachedNav.appendChild(menuNav) 
    attachedNav.appendChild(aboutNav)
    attachedNav.appendChild(contactNav) 

}




export {buildElement, buildNavBar }





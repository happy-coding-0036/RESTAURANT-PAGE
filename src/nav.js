

const buildElement = function (element, style, content2, idName) {
    
    const newElement = document.createElement(element);
    newElement.textContent = content2
    newElement.id = idName;
    newElement.classList.add(style)

    return newElement
}


const buildNavBar = function() {


    const content = document.getElementById("content")
    const aboutNav = buildElement("div", "navStyle", "about", null)
    const contactNav = buildElement("div", "navStyle", "contact", null)
    const menuNav = buildElement("div", "navStyle", "menu", null)
    const homeNav = buildElement("div", "navStyle", "home", null)

    const navContainer = buildElement("div", "navConStyle", null, null)

    const attachedNav = content.appendChild(navContainer)
    
    attachedNav.appendChild(homeNav)
    attachedNav.appendChild(menuNav) 
    attachedNav.appendChild(aboutNav)
    attachedNav.appendChild(contactNav) 

}




export {buildElement, buildNavBar }





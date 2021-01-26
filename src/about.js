
const createElement = function (element, style, content2) {
    const content = document.getElementById("content")
    const newDiv = document.createElement(element);
    newDiv.textContent = content2
    const newElement = content.appendChild(newDiv);
    return newElement.classList.add(style)
    
}




const loadAbout = function () {
   
}
export { loadAbout, createElement }
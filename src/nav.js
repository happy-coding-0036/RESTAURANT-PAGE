const createElement = function (element, style, content2, idName) {
    const content = document.getElementById("content")
    const newDiv = document.createElement(element);
    newDiv.textContent = content2
    const newElement = content.appendChild(newDiv);
    newElement.id = idName;
    return newElement.classList.add(style)
    
}



export { createElement }





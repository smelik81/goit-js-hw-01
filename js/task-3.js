// Task-3
function getElementWidth(content, padding, border) {
   const numContent = Number.parseInt(content);
   const numPadding = Number.parseInt(padding);
   const numBorder = Number.parseFloat(border);
    const mathResult = (numContent + (numPadding + numBorder) * 2);
    console.log(mathResult);
}

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
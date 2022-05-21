// Write your code here!

//create your new element here and assign it to newHeader
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Sunee is the champion!";
newHeader.className = "victory";

//enter the code to remove the node element here
document.querySelector("main#main").remove();

// main.remove();
// const newHeader = document.createElement("h1");
// newHeader.setAttribute("id", "victory");
// newHeader.innerHTML ="Sunee is the champion";
// document.body.append(newHeader);

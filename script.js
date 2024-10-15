const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clear-btn");

saveButton.addEventListener ("click", displayUserName);
window.addEventListener("load", ()); 

function displayUserName (){
  const displayName = document.getElementById("username").value
  localStorage.setItem("display-name", displayName);

  const savedDisplayName = localStorage.getItem("display-name");
  document.getElementById("display-name").innerHTML = savedDisplayName;
}


clearButton.addEventListener ("click", clearUserName);

function clearUserName(){
localStorage.clear();
document.getElementById("display-name").innerHTML = "   ";
}


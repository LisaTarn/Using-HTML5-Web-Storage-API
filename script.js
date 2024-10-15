const saveButton = document.getElementById("save-btn"); //setting up save button
const clearButton = document.getElementById("clear-btn"); //setting up clear button

saveButton.addEventListener ("click", displayUserName); //adding event listener so input will save to local storage on click

function displayUserName (){  //function to save to local storage
  const displayName = document.getElementById("username").value
  localStorage.setItem("display-name", displayName);

  const savedDisplayName = localStorage.getItem("display-name");
  document.getElementById("display-name").innerHTML = savedDisplayName;
}

clearButton.addEventListener ("click", clearUserName); //adding event listener to clear button to clear local storage

function clearUserName(){  //function to clear local storage
localStorage.clear();
document.getElementById("display-name").innerHTML = "   ";
}




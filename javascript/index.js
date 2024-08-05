const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
}
let isChatboxUp = false;
let togglebut = false;


function toggleChatbox() {
  const chatbox = document.getElementById("Chatbox");
  if (isChatboxUp) {
    chatbox.style.right = "0px"; 
  } else {
    chatbox.style.right = "-200px"; 
  }
  const toggleButton = document.getElementById("toggleButton");

  if (togglebut) {
    chatbox.style.right = "0px"; 
  } else {
    chatbox.style.right = "-200px"; 
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
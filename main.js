

var chat = document.querySelector(".support-chat")
function showChat(){
  chat.style.display="block";
  // document.querySelector(".chat").style.display="none";
}
function showBeginChat(){
  chat.style.display="none";
  document.querySelector(".begin-chat").style.display="block";
}

function outChat(){
  chat.style.display="none";
  document.querySelector(".chat").style.display="block";
  document.querySelector(".begin-chat").style.display="none";
}

function showThongBao(){
  
}
var logout = document.getElementById("logout");
var welcome = document.getElementById("user-welcome");


var userName = localStorage.getItem("userName")
console.log(userName);

welcome.innerHTML = `welcome <span class="fw-bolder fs-3">${userName}</span> `

logout.addEventListener("click", function(){
    localStorage.removeItem("userName");
    window.location.href = "index.html"
})

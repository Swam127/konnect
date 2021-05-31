
function logout()
{
    localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("login.html");
}

function changeScreen()
{
    window.location = "app.html";
}

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
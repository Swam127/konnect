user_name1 = localStorage.getItem("user_name1");

document.getElementById("user_name1").innerHTML = "Welcome " + user_name1 + " !";

function logout1()
{
    localStorage.removeItem("user_name1");
    localStorage.removeItem("room_name");
    window.location.replace("login.html");
}

function changeScreen44()
{
    window.location = "firmApp.html";
}
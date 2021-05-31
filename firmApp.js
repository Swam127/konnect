function logout2()
{
    localStorage.removeItem("user_name1");
    localStorage.removeItem("room_name");
    window.location.replace("login.html");
}

function submit()
{
    document.getElementById("pro1").innerHTML = "Request Submitted Successfully ! "
    document.getElementById("pro2").innerHTML = "Thanks for using KONNECT ! "
}